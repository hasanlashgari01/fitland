import { useQuery } from "@tanstack/react-query";
import { getUsersBanService, getUsersService, toggleBanService } from "../services/user";

export const useUsers = (page) =>
  useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsersService({ page }),
  });

export const useBanUsers = (page) =>
  useQuery({
    queryKey: ["ban-users", page],
    queryFn: () => getUsersBanService({ page }),
  });

export const useToggleBanUser = () =>
  useQuery({
    queryKey: ["toggle-ban"],
    queryFn: (id) => toggleBanService(id),
  });
