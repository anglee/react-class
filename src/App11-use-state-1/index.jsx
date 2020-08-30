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
  const { name, isHidden } = props;
  return <li>Hi, {isHidden ? null : name}</li>;
};

const App = () => {
  const [isHidden, setIsHidden] = React.useState(false);
  return (
    <h1>
      <ul>
        <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
        {companies.map((company, i) => {
          return <Company name={company} isHidden={isHidden} />;
        })}
      </ul>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
