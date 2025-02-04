import { useMutation, useQuery } from "@tanstack/react-query";
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
  useMutation({
    mutationKey: ["toggle-ban"],
    mutationFn: (id) => toggleBanService(id),
  });
