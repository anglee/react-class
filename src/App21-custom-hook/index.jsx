import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Api from "./Api";
import Company from "./Company";
import CompanyDetails from "./CompanyDetails";
import CompanyJsonView from "./CompanyJsonView";

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
            <Company
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
      {selectedCompany && (
        <>
          <CompanyDetails companyName={selectedCompany} />
          <CompanyJsonView companyName={selectedCompany} />
        </>
      )}
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
