import { useState, useEffect } from "react";
import Api from "./Api";

const useCompanyDetails = (companyName) => {
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

    return {
        company, isLoading
    }
}

export default useCompanyDetails;
