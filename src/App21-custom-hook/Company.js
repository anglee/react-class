
import React from "react";

const Company = (props) => {
    const { name, isHidden, onToggle, onSelect } = props;
    return (
      <li>
        <button onClick={onToggle}>Toggle</button>
        <button
          onClick={() => {
            onSelect(name);
          }}
        >
          Select
        </button>
        Hi, {isHidden ? null : name}{" "}
      </li>
    );
  };

  export default Company;