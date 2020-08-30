import React, { useState } from "react";
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
  const [isHidden, setIsHidden] = useState(false);
  return (
    <li>
      <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
      Hi, {isHidden ? null : name}{" "}
    </li>
  );
};

const App = () => {
  return (
    <h1>
      <ul>
        {companies.map((company) => {
          return <Company name={company} />;
        })}
      </ul>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
