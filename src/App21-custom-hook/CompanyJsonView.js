import React from "react";
import {Spin} from "antd";
import ReactJson from "react-json-view";
import useCompanyDetails from "./useCompanyDetails";

const CompanyJsonView = ({companyName}) => {
    const { company, isLoading } = useCompanyDetails(companyName);
    return isLoading ? <Spin /> : 
      <ReactJson name="company" src={company} />
    ;
}

export default CompanyJsonView;


