import React from "react";
import { Spin } from "antd";
import useCompanyDetails from "./useCompanyDetails";

const CompanyDetails = ({ companyName }) => {
  const { company, isLoading } = useCompanyDetails(companyName);
  return (
    <div>
      <div>name: {companyName}</div>
      <div>address {isLoading ? <Spin /> : company.address}</div>
    </div>
  );
};

export default CompanyDetails;
