import { graphql, useLazyLoadQuery } from "react-relay";
// 컴파일러가 생성한 파일을 Artifact라고 부른다. (https://relay.dev/docs/glossary/)
import type { TestQuery as TestQueryType } from "./__generated__/TestQuery.graphql";

// 쿼리 이름은 반드시 모듈 이름과 동일한 이름으로 시작해야 하고 Query를 뒤에 붙여야 한다.
// 예를 들면 지금 여기서는 Test~~~Query 이렇게 가야 함!! 안 그러면 컴파일 시 오류난다.

const query = graphql`
  query TestQuery {
    allFilms {
      films {
        title
        director
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

  console.log(data);
  return (
    <ul>
      {data.allFilms?.films?.map((film) => (
        <li>{`${film?.title} (감독: ${film?.director})`}</li>
      ))}
    </ul>
  );
}
