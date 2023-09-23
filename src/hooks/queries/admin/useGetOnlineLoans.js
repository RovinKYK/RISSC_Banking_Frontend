import { useQuery } from "react-query";
import axios from "axios";

const useGetOnlineLoans = async () => {

  const { data } = await axios({
    url: '/api/listOnlineLoans/',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.online_loans;
};

export default function useApi() {
  return useQuery(["all_online_loans"], useGetOnlineLoans, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}