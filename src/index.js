import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";

// ReactDOM.render(<App />, document.getElementById('root'));
require("react-hot-loader/patch");

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept("./App", () => render(App));
registerServiceWorker();
