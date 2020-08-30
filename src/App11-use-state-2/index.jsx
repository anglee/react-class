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
  const { name, isHidden } = props;
  return <li>Hi, {isHidden ? null : name}</li>;
};

const App = () => {
  const [isOddsHidden, setIsOddsHidden] = React.useState(false);
  const [isEvensHidden, setIsEvensHidden] = React.useState(false);
  return (
    <h1>
      <ul>
        <button onClick={() => setIsOddsHidden(!isOddsHidden)}>
          Toggle Odds
        </button>
        <button onClick={() => setIsEvensHidden(!isEvensHidden)}>
          Toggle Evens
        </button>
        {companies.map((company, i) => {
          if (i % 2) {
            return (
              <Company name={company} isHidden={isEvensHidden} />
            );
          }
          return <Company name={company} isHidden={isOddsHidden} />;
        })}
      </ul>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
