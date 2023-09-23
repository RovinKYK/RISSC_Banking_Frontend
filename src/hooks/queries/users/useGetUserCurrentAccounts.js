import { useQuery } from "react-query";
import axios from "axios";

const useGetUserCurrentAccounts = async () => {
  const { data } = await axios({
    url: "/api/userCurrentAccounts",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data.accounts;
};

export default function useApi() {
  return useQuery(["user_currents"], useGetUserCurrentAccounts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
