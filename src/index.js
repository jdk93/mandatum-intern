import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/index";
import initStore from "./initStore";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";

export const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
