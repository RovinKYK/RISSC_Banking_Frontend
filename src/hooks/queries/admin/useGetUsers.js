import { useQuery } from "react-query";
import axios from "axios";

const useGetUsers = async () => {

  // fetch all users

  const { data } = await axios({
    url: '/api/admin/listUsers',
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${localStorage.jwt}`
    },
  });
  return data.users;
};

export default function useApi() {
  return useQuery(["all_users"], useGetUsers, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
}