import { httpInterceptedService } from "../core/http-service";

export const getProductsService = async (page) => {
  return await httpInterceptedService("/admin/products", {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
    },
  }).then((res) => res.data);
};

export const createProductService = async (data) =>
  await httpInterceptedService
    .post("/admin/products", data, { headers: { "Content-Type": "multipart/form-data" } })
    .then((res) => res.data);

export const getProductItemService = async (id) =>
  await httpInterceptedService(`/admin/product/${id}`).then((res) => res.data);

export const deleteProductService = async (id) =>
  await httpInterceptedService.delete(`/admin/product/${id}`).then((res) => res.data);
