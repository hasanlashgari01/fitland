import { httpInterceptedService } from "../core/http-service";

export const getCategoriesService = async (isActive) => {
  let url = "/admin/category";
  if (isActive === 1) url += "?isActive=1";
  else if (isActive === 0) url += "?isActive=0";

  return await httpInterceptedService(url).then((res) => res.data);
};

export const deleteCategoryService = async (categoryId) =>
  await httpInterceptedService.delete(`/admin/category/${categoryId}`).then((res) => res.data);

export const toggleActiveCategoryService = async (categoryId) =>
  await httpInterceptedService.patch(`/admin/category/${categoryId}`).then((res) => res.data);
