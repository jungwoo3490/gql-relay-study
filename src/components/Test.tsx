import { graphql, useLazyLoadQuery } from "react-relay";
// 컴파일러가 생성한 파일을 Artifact라고 부른다. (https://relay.dev/docs/glossary/)
import type { TestQuery as TestQueryType } from "./__generated__/TestQuery.graphql";
import { FilmHeader } from "./FilmHeader";
import { FilmMeta } from "./FilmMeta";
import { FilmSummary } from "./FilmSummary";

// 쿼리 이름은 반드시 모듈 이름과 동일한 이름으로 시작해야 하고 Query를 뒤에 붙여야 한다.
// 예를 들면 지금 여기서는 Test~~~Query 이렇게 가야 함!! 안 그러면 컴파일 시 오류난다.

// const query = graphql`
//   query TestQuery {
//     allFilms {
//       films {
//         title
//         director
//       }
//     }
//   }
// `;

// GraphQL은 페이지에서 필요한 데이터가 있으면 최상위에서 쿼리해서 자식으로 뿌려준다.
// Why? 각 컴포넌트에서 필요한것만 쿼리하면 되는거 아닌가??
// => 이렇게 되면 쿼리 개수만큼의 네트워크 요청이 일어나기 때문에 비효율적이고 Waterfall 문제가 발생할 수도 있다.
// 근데 최상위에서 쿼리하게 되면 최상위 컴포넌트에 자식 컴포넌트에서 필요로 하는 데이터에 대한 의존성이 생겨버린다. 즉, 자식에서 뭘 필요로 하는지에 대한 선언을 최상위에서 해야 한다.
// 이를 해결하기 위해 Fragment가 등장했다.

// Fragment는 자식 컴포넌트에서 내가 필요한 게 무엇인지 직접 선언한다.
// Fragment를 사용하면 부모 쿼리가 자식들이 어떤 걸 필요로 하는지에 대해 몰라도 되는 장점이 있다.
// 예를 들어 FilmHeader에서 새로운 필드를 필요로 할 때 부모에서 이를 수정하지 않아도 된다.
// 최상위 부모에서 쿼리할 때 ...(자식에서 선언한 Fragment 이름) 처럼 하면 된다.
const query = graphql`
  query TestQuery {
    allFilms {
      films {
        ...FilmHeader_film
        ...FilmMeta_film
        ...FilmSummary_film
      }
    }
  }
`;

export function Test() {
  // 첫 번째 인자: graphql 태그로 작성한 쿼리
  // 두 번쨰 인자: 쿼리 변수, 쿼리 변수가 변경된채로 리렌더되면 새 변수 기반으로 fetch하고 캐시가 갈아끼워질 수 있다.
  // 세 번쨰 인자: fetchPolicy 옵션

  // fetchPolicy 옵션
  // 1. store-or-network(기본값): 기본적으로 Store에 캐시된 데이터를 재사용하려고 하고, 쿼리 데이터가 하나도 없으면 네트워크 요청을 한다.
  // 2. store-and-network: Store에 캐시된 데이터를 재사용하고, 항상 네트워크 요청도 보내서 캐시 업데이트한다.
  // 3. network-only: Store 캐시 무시하고 항상 네트워크 요청을 한다.

  // useLazyLoadQuery는 hook이므로 매 렌더링마다 실행된다.
  // (store-or-network일때) 실행될 때 기본적으로 Store에 있는 데이터 가져오려고 하고, 없다면 fetch해서 데이터를 가져와서 반환해준다.

  // 컴포넌트는 쿼리 데이터 업데이트에 자동으로 subscribe되어서 쿼리 데이터 업데이트되면 컴포넌트가 최신 데이터를 활용해서 자동으로 리렌더된다.

  // 컴파일러 아티팩트를 useLazyLoadQuery의 제네릭으로 넘기면 data 타입이 정확하게 잡힌다!!
  const data = useLazyLoadQuery<TestQueryType>(query, {});

  return (
    <ul>
      {data.allFilms?.films?.map((film) => (
        <>
          {/* <li>{`${film?.title} (감독: ${film?.director})`}</li> */}
          {/* prop으로 넘겨주는 film은 실제 데이터가 아니라 Fragment reference(포인터)이다. */}
          {/* 각 컴포넌트는 이 포인터를 받아서 useFragment로 자기가 필요한 데이터를 Store에서 직접 읽어온다. */}
          {film && <FilmHeader film={film} />}
          {film && <FilmMeta film={film} />}
          {film && <FilmSummary film={film} />}
        </>
      ))}
    </ul>
  );
}
