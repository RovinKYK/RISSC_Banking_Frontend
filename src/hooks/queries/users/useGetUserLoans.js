import { useQuery } from "react-query";
import axios from "axios";

const useGetUserLoans = async () => {
  const { data } = await axios({
    url: "/api/userLoans",
    method: "GET",
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`,
    },
  });
  return data.loans;
};

export default function useApi() {
  return useQuery(["user_loans"], useGetUserLoans, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
