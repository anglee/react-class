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
  const { name } = props;
  if (name.startsWith("T")) {
    return <h1 className="heading">Hi, {name}</h1>;
  }
  return <li>Hi, {name}</li>;
};

ReactDOM.render(
  <h1>
    <ol>
      {companies.map((company) => (
        <Company name={company} />
      ))}
    </ol>
  </h1>,
  document.getElementById("root"),
);
