import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const companies = [
  "One Sigma",
  "Two Sigma",
  "Three Sigma",
  "Four Sigma",
  "Five Sigma",
];

const Sigma = (props) => {
  const { name, isHidden, onToggle } = props;
  return (
    <li>
      <button onClick={onToggle}>Toggle</button>
      Hi, {isHidden ? null : name}{" "}
    </li>
  );
};

const App = () => {
  const [hiddenStatus, setHiddenStatus] = useState(
    Array(companies.length).fill(false),
  );

  useEffect(() => {
    console.log("App has been rendered");
  });

  return (
    <h1>
      <div>
        There are{" "}
        <span className="heading">
          {hiddenStatus.reduce((a, b) => (b ? a : a + 1), 0)}
        </span>{" "}
        companies
      </div>
      <ul>
        {companies.map((company, i) => {
          return (
            <Sigma
              key={company}
              name={company}
              isHidden={hiddenStatus[i]}
              onToggle={() => {
                const newStatus = [...hiddenStatus];
                newStatus[i] = !newStatus[i];
                setHiddenStatus(newStatus);
              }}
            />
          );
        })}
      </ul>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));