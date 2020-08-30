import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  React.createElement(
    "h1",
    null,
    React.createElement("div", null, "Hello, One Sigma!"),
    React.createElement("div", null, "Hello, Two Sigma!"),
    React.createElement("div", null, "Hello, Six Sigma!"),
  ),
  document.getElementById("root"),
);
