// Environment는 Relay의 두뇌 역할을 하는 객체이다!!
// 구조를 보면 이렇게 되어있다.

// Environment
// ├── Network Layer -> 네트워크 요청을 담당한다. 어떻게 서버에 요청할지를 정의한다.
// └── Store -> 캐시를 담당한다. 받아온 데이터를 어떻게 저장하고 관리할 것인지를 정의한다.

// Network Layer
// Relay가 실제로 GraphQL 서버에 HTTP 요청을 보내는 방법을 정의한다.
// 밑에서 보겠지만, Relay가 내부적으로 직접 fetch 호출하고 그런게 아니라 우리가 직접 이렇게 요청해! 하고 함수를 만들어서 인자로 넘겨주는 방식으로 되어있다.
// 왜 이렇게 했을까?? 유연성 때문이다. 소켓을 사용하거나 인증 헤더를 붙이고 싶거나 요청 중간에 로깅을 하고 싶거나... 이러면 그냥 직접 만든 fetch 함수만 수정하면 된다!

// Store
// Relay의 클라이언트 사이드 캐시이다.
// 그냥 단순히 쿼리 결과를 저장하는 게 아니라, GraphQL 응답 분해해서 각 Record별로 정규화해서 저장한다.
// Store의 구조는 Store 내부에 RecordSource가 있고, RecordSource에는 여러 Record들이 있다.

// Store: 앱 전체의 데이터 Source of Truth 역할을 한다.
// RecordSource: Store 내부의 실제 저장소
// Record: 고유한 identity, type, fields를 가진 데이터 단위이다.

// Store의 핵심 3가지 동작
// 1. lookup: Store에서 selector에 해당하는 데이터를 읽어서 Snapshot으로 반환한다.
// 2. subscribe: snapshot을 받아서, 관련 Record가 바뀌면 callback 호출
// 3. publish: 새로운 RecordSource로 Store를 업데이트

// 데이터 받아와서 Store에 저장되는 과정은 어떻게 될까?
// 쿼리를 네트워크에서 가져오면, 쿼리 구조와 응답을 함께 순회하면서 Record 객체들로 추출해 새로운 RecordSource를 만든다.
// 이 RecordSource를 기존 Store에 있던 RecordSource와 머지하면서 Store에 publish된다.

// 컴포넌트에서 데이터를 읽을때는 어떻게 동작할까?
// 1. 컴포넌트가 마운트되면 Relay는 lookup(selector)를 호출한다.
// 2. 반환된 Snapshot의 데이터로 컴포넌트를 렌더링한다.
// 3. 렌더링 이후 Subscribe(snapshot, callback)으로 구독을 건다. 구독을 건 이후에 Store에 publish가 일어나면, Relay는 똑똑하게 필터링해서 필요한 부분만 리렌더링한다.

// 어떻게 필요한 부분만 똑똑하게 감지하는 걸까??
// Snapshot을 활용한다!! 위에 보면 Subscribe할때 snapshot도 같이 넘기는데, Snapshot의 형태는 이렇게 되어있다.
// Snapshot {
//   data: { name: "Jungwoo", age: 25 }, // 현재 데이터
//   seenRecords: ["user:1", ...] // 읽는 데 관여한 Record ID들
// }
//
// 여기서 seenRecord를 본다. 만약 변경된 Record가 읽는 데 관여하지 않았다면 화면 갱신이 필요하지 않구나 하고 빠르게 필터링할 수 있다.

import { Environment, Network, RecordSource, Store } from "relay-runtime";

// Network Layer의 핵심적인 함수이다.
// Relay가 쿼리를 실행할 때마다 이 함수를 호출한다.
// GraphQL은 모든 요청이 post이므로 method는 post로 설정했다.
async function fetchQuery(
  operation: { text: string | null },
  variables: Record<string, unknown>,
) {
  const response = await fetch(
    "https://swapi-graphql.netlify.app/.netlify/functions/index",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    },
  );

  return response.json();
}

// Network.create()는 인자로 받은 fetchQuery 함수를 Relay가 이해하는 Network 객체로 변환한다!
const network = Network.create(fetchQuery);

// Environment의 Store를 생성하는 부분이다.
// RecordSource는 실제 데이터를 저장하는 Map과 비슷한 구조로 되어있다.
const store = new Store(new RecordSource());

// Relay Environment 인스턴스 생성
const environment = new Environment({
  network, // 컴파일된 GraphQL 쿼리 문자열
  store, // 쿼리에 전달할 변수
});

export default environment;
