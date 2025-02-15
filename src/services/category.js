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

export const getCategoryListService = async () =>
  await httpInterceptedService("/admin/category-list").then((res) => res.data);

export const deleteCategoryService = async (id) =>
  await httpInterceptedService.delete(`/admin/category/${id}`).then((res) => res.data);

export const toggleActiveCategoryService = async (id) =>
  await httpInterceptedService.patch(`/admin/category/${id}`).then((res) => res.data);

export const updateCategoryService = async ({ id, data }) =>
  await httpInterceptedService.put(`/admin/category/${id}`, data).then((res) => res.data);

export const createCategoryService = async (data) =>
  await httpInterceptedService.post(`/admin/category`, data).then((res) => res.data);

export const getCategoryService = async (id) =>
  await httpInterceptedService(`/admin/category/${id}`).then((res) => res.data);

export const getCategoryBySlugService = async (slug) =>
  await httpInterceptedService(`/category/slug/${slug}`).then((res) => res.data);
