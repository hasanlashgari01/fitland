import { httpInterceptedService } from "../core/http-service";

export const getCategoriesService = async ({ status, page }) => {
  let url = "/admin/category";
  if (status === 1) url += "?isActive=1";
  else if (status === 0) url += "?isActive=0";

  return await httpInterceptedService(url, {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
    },
  }).then((res) => res.data);
};

export const deleteCategoryService = async (categoryId) =>
  await httpInterceptedService.delete(`/admin/category/${categoryId}`).then((res) => res.data);

export const toggleActiveCategoryService = async (categoryId) =>
  await httpInterceptedService.patch(`/admin/category/${categoryId}`).then((res) => res.data);
