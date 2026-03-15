import { graphql, useFragment } from "react-relay";
import type { FilmHeader_film$key } from "./__generated__/FilmHeader_film.graphql";

// Fragment 이름은 전역적으로 유일해야 한다. 아니면 컴파일 시 오류가 난다.
// Fragment 네이밍에는 특정한 규칙이 적용되지는 않는데, <module_name>_<prop_name>로 하는 것이 권장된다.
// 이렇게 네이밍하면 어떤 모듈에 어떤 Fragment가 정의되어 있는지 쉽게 확인할 수 있다.
const filmHeaderFragment = graphql`
  fragment FilmHeader_film on Film {
    title
    episodeID
  }
`;

// Fragment 선언하고 컴파일 하면 Fragment이름$key라는 타입이 generated에 생성되는데, 요거 import해서 prop 타입으로 지정하면 type-safe하게 사용이 가능하다.
export function FilmHeader({ film }: { film: FilmHeader_film$key }) {
  // useFragment는 첫 번째 인자로 Fragment 정의(어떤 필드를 읽을지), 두 번째 인자로 Fragment reference(어떤 객체에서 읽을지)를 받아서 이 컴포넌트가 선언한 필드만 Store에서 읽어서 반환해준다.
  const data = useFragment(filmHeaderFragment, film);
  return (
    <h3>
      에피소드 {data.episodeID} - {data.title}
    </h3>
  );
}
