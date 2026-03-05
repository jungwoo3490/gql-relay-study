import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // babel-plugin-relay 세팅
        // 소스코드에서 graphql 태그를 찾아서 __genereted 폴더의 스키마 파일을 가져오는 구문으로 교체해주는 플러그인이다.

        // 왜 babel 기반 플러그인을 써야 할까?
        // Vite는 esbuild 기반인데 esbuild는 AST 노드에 직접 접근하는 API가 없다.
        // graphql 태그를 찾아서 교체하려면 AST 노드 단위로 처리하는 babel의 도움을 받아야 하기 때문에 babel 기반 플러그인을 사용해야 한다.

        // babel-plugin-relay는 반드시 다른 플러그인보다 먼저 실행되어야 한다. 왜냐면 graphql 템플릿 리터럴이 다른 플러그인에 의해 먼저 변환되어버리면 Relay가 인식할 수 없기 때문이다.
        // https://relay.dev/docs/v20.0.0/getting-started/babel-plugin/ 맨 마지막 문단에 있음!
        plugins: [["relay"], ["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
