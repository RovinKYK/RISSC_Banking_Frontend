import { useQuery } from "react-query";
import axios from "axios";

const useGetLoans = async () => {

  const { data } = await axios({
    url: '/api/manager/installments/late/',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.loan_installments.concat(data.online_loan_installments);
};

export default function useApi() {
  return useQuery(["late_installments"], useGetLoans, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}