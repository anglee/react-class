import React from "react";
import ReactDOM from "react-dom";

const companies = [
  "One Sigma",
  "Two Sigma",
  "Three Sigma",
  "Four Sigma",
  "Five Sigma",
];

ReactDOM.render(
  <h1>
    <ol>
      {companies.map((company) => (
        <li key={company}>Hi, {company}</li>
      ))}
    </ol>
  </h1>,
  document.getElementById("root"),
);

// <li key={company}>Hi, {company}</li>
