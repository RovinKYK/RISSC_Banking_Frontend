import { useQuery } from "react-query";
import axios from "axios";

const useGetTransactions = async () => {

  // fetch all transactions

  const { data } = await axios({
    url: '/api/admin/listTransactions/',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.transactions;
};

export default function useApi() {
  return useQuery(["all_transactions"], useGetTransactions, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}