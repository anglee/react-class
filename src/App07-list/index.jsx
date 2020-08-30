import React from "react";
import ReactDOM from "react-dom";

const companies = [
  {id: 1, name: "One Sigma"},
  {id: 1, name: "Two Sigma"},
  {id: 1, name: "Three Sigma"},
  {id: 1, name: "Four Sigma"},
  {id: 1, name: "Five Sigma"},
];

ReactDOM.render(
  <h1>
    <ol>
      {companies.map((company) => (
        <li>Hi, {company}</li>
      ))}
    </ol>
  </h1>,
  document.getElementById("root"),
);

// <li key={company}>Hi, {company}</li>
