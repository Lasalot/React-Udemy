import React from "react";
import ReactDOM from "react-dom";
import App2 from "./containers/App2";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App2 appTitle="Person Manager" />,
  document.getElementById("root")
);
registerServiceWorker();
