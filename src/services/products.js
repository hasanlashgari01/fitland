import { httpInterceptedService } from "../core/http-service";

export const getProductsService = async (page, limit = import.meta.env.VITE_PAGE_LIMIT) => {
  return await httpInterceptedService("/admin/products", {
    params: {
      page,
      limit,
    },
  }).then((res) => res.data);
};

export const getProductItemService = async (productId) =>
  await httpInterceptedService(`/admin/product/${productId}`).then((res) => res.data);

export const deleteProductService = async (productId) =>
  await httpInterceptedService.delete(`/admin/product/${productId}`).then((res) => res.data);
