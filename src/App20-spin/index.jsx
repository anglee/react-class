import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Spin } from "antd";

const CompanyDatabase = {
  "One Sigma": {
    name: "One Sigma",
    address: "101 AOA, NYC",
  },
  "Two Sigma": {
    name: "One Sigma",
    address: "102 AOA, NYC",
  },
  "Three Sigma": {
    name: "One Sigma",
    address: "103 AOA, NYC",
  },
  "Four Sigma": {
    name: "One Sigma",
    address: "104 AOA, NYC",
  },
  "Five Sigma": {
    name: "One Sigma",
    address: "105 AOA, NYC",
  },
};
const Api = {
  fetchCompanies: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          "One Sigma",
          "Two Sigma",
          "Three Sigma",
          "Four Sigma",
          "Five Sigma",
        ]);
      }, 1000);
    }),
  fetchCompanyDetails: ({ companyName }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(CompanyDatabase[companyName]);
      }, 1000);
    }),
};

const Sigma = (props) => {
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

const Company = ({ companyName }) => {
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState({});
  useEffect(() => {
    setIsLoading(true);
    Api.fetchCompanyDetails({ companyName })
      .then((ret) => {
        setCompany(ret);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [companyName]);
  return (
    <div>
      <div>name: {companyName}</div>
      <div>address {isLoading ? <Spin /> : company.address}</div>
    </div>
  );
};

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [hiddenStatus, setHiddenStatus] = useState(
    Array(companies.length).fill(false),
  );
  useEffect(() => {
    Api.fetchCompanies().then((result) => {
      setCompanies(result);
      setHiddenStatus(Array(result.length).fill(false));
    });
  }, []);
  const [selectedCompany, setSelectedCompany] = useState(null);

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
              onSelect={(name) => {
                setSelectedCompany(name);
              }}
            />
          );
        })}
      </ul>
      {selectedCompany && <Company companyName={selectedCompany} />}
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
