import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./login/App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
  rootElement
);
