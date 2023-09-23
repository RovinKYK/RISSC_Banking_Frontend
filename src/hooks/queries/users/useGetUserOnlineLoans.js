import { useQuery } from "react-query";
import axios from "axios";

const useGetUserOnlineLoans = async () => {
  const { data } = await axios({
    url: "/api/userOnlineLoans",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data["Online_loans"];
};

export default function useApi() {
  return useQuery(["user_online_loans"], useGetUserOnlineLoans, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
