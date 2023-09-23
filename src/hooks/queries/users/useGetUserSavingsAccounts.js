import { useQuery } from "react-query";
import axios from "axios";

const useGetUserSavingsAccounts = async () => {
  const {data} = await axios({
    url: "/api/userSavingsAccounts",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data.accounts;
};

export default function useApi() {
  return useQuery(["user_savings"], useGetUserSavingsAccounts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
