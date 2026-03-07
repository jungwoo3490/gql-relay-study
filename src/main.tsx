import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import App from "./App.tsx";
import "./index.css";
import environment from "./relay/environment.ts";

// RelayEnvironmentProvider
// Environment를 그냥 만들었다고 해서 React 컴포넌트 트리가 이 Environment의 존재를 알고 컴포넌트에서 접근해서 쓸 수 있는게 아니다.
// React 컴포넌트에서 우리가 세팅한 Environment에 접근할 수 있도록 Context로 주입해준다.
// 이렇게 해줘야 useFragment, useLazyLoadQuery 같은 Relay hook이 내부적으로 lookup, subscribe 등을 호출할 때 어떤 Environment를 써야 할지에 대해 알 수 있다!!

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  </StrictMode>,
);
