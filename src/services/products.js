import { httpInterceptedService } from "../core/http-service";

export const getProductsService = async (page) => {
  return await httpInterceptedService("/admin/products", {
    params: {
      page,
    },
  }).then((res) => res.data);
};

export const getProductItemService = async (productId) =>
  await httpInterceptedService(`/admin/product/${productId}`).then((res) => res.data);

export const deleteProductService = async (productId) =>
  await httpInterceptedService.delete(`/admin/product/${productId}`).then((res) => res.data);
