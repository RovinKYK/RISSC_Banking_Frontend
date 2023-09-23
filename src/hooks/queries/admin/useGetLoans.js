import { useQuery } from "react-query";
import axios from "axios";

const useGetLoans = async () => {

  const { data } = await axios({
    url: '/api/listLoans/',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.loans;
};

export default function useApi() {
  return useQuery(["all_loans"], useGetLoans, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}