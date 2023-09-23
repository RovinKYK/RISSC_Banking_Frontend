import { useQuery } from "react-query";
import axios from "axios";

const useGetUserLoanInstallments = async (loanID, type) => {
  const { data } = await axios({
    url: "/api/loaninstallments",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
    params: {
      loanID: loanID,
      loanType: type, 
    },
  });
  return data.installments;
};

export default function useApi() {
  return useQuery(["user_installments"], useGetUserLoanInstallments, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
