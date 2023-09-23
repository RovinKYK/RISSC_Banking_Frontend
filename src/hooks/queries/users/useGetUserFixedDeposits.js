import { useQuery } from "react-query";
import axios from "axios";

const useGetUserFixedDeposits = async () => {
  const { data } = await axios({
    url: "/api/fixedDeposits",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data.fixed_deposits;
};

export default function useApi() {
  return useQuery(["user_fds"], useGetUserFixedDeposits, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
