import { httpInterceptedService, httpPublicService } from "../core/http-service";

export const getMe = async () => await httpPublicService("/auth/me").then((res) => res.data);

export const getUsersService = async ({ page }) => {
  return await httpPublicService("/admin/users", {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
    },
  }).then((res) => res.data);
};

export const getUsersBanService = async ({ page }) =>
  await httpInterceptedService("/admin/ban", {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
    },
  }).then((res) => res.data);

export const toggleBanService = async (id) =>
  await httpInterceptedService.patch(`/admin/ban/${id}`).then((res) => res.data);
