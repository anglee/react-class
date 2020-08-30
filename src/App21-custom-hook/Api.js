
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

  export default Api;