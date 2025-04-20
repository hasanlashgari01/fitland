import { httpInterceptedService, httpPublicService, httpService } from "../core/http-service";

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

export const toggleStatusProductService = async (id) =>
  await httpInterceptedService.patch(`/admin/product/${id}`).then((res) => res.data);

export const getProductBySlugService = async (slug) =>
  await httpPublicService(`/product/${slug}`).then((res) => res.data);

export const getSpecialOffer = async () => await httpService(`/product/special-offer`).then((res) => res.data);

export const getLatestShoes = async () => await httpService(`/product/latest-shoes`).then((res) => res.data);

export const getLatestSets = async () => await httpService(`/product/latest-sets`).then((res) => res.data);

export const getRelatedProduct = async ({ productId }) =>
  await httpService(`/product/related/${productId}`).then((res) => res.data);
