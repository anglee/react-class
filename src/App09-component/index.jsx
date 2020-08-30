import React from "react";
import ReactDOM from "react-dom";

const companies = [
  "One Sigma",
  "Two Sigma",
  "Three Sigma",
  "Four Sigma",
  "Five Sigma",
];

const Company = (props) => {
  return <li>Hi, {props.name}</li>;
};

ReactDOM.render(
  <h1>
    <ol>
      {companies.map((company) => (
        <Company key={company} name={company} />
      ))}
    </ol>
  </h1>,
  document.getElementById("root"),
);
