import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";

import "./styles/index.css";

import { App } from "App";
import { store } from "store";

const rootView = document.getElementById("root");

if (rootView) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootView
  );
}
