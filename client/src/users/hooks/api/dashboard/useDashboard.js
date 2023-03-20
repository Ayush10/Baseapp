import { useQuery } from "react-query";
import { getDashboard } from "../../../api/dashboard/dashboard";

export const useGetDashboard = (id) => {
  return useQuery(["getDashboard", id], () => getDashboard(id), {
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });
};
