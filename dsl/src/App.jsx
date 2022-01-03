import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./index.css";

const App = () => (
  <div className="container">
    <Button />
    <div>Name: dsl</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
