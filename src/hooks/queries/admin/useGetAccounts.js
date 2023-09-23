import { useQuery } from "react-query";
import axios from "axios";

const useGetAccounts = async () => {

  // fetch all accounts

  const { data } = await axios({
    url: '/api/admin/listAccounts',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.accounts;
};

export default function useApi() {
  return useQuery(["all_accounts"], useGetAccounts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}