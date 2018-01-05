import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import * as store from "./stores";

import "./semantic/semantic.min.css";
// import "./global.css";

// reaquired to use react-hot-loader
require("react-hot-loader/patch");

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider {...store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    rootEl
  );

render(withRouter(App));
if (module.hot) module.hot.accept("./App", () => render(withRouter(App)));
registerServiceWorker();
