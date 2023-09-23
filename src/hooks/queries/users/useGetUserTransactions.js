import { useQuery } from "react-query";
import axios from "axios";

const useGetUserTransactions = async () => {
  const { data } = await axios({
    url: "/api/transactions",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data.transactions;
};

export default function useApi() {
  return useQuery(["user_transactions"], useGetUserTransactions, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
