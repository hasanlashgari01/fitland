import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../services/chart";

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["dashboard-data"],
    queryFn: getDashboard,
  });
};
