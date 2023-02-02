import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import "./styles/index.css";

import { App } from "App";
import { store } from "store";

const rootView = document.getElementById("root");

if (rootView) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    rootView
  );
}
