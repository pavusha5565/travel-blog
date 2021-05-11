import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
