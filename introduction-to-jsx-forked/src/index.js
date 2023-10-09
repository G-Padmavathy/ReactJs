import React from "react";
import ReactDOM from "react-dom";
// var React = require("react");
// var ReactDOM = require("react-dom");

//use react.js
ReactDOM.render(
  <div>
    <h1>Hare Krishna Hare Rama</h1>
  </div>,
  document.getElementById("root")
);

//use pure javascript
var h1 = document.createElement("h1");
h1.innerHTML = "Hare Rama Hare Krishna";
document.getElementById("root").appendChild(h1);
