import { useQuery } from "react-query";
import axios from "axios";

const useGetFixedDeposits = async () => {

  const { data } = await axios({
    url: '/api/admin/fixedDeposits/',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.fixed_deposits;
};

export default function useApi() {
  return useQuery(["all_fixed_deposits"], useGetFixedDeposits, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}