import { httpInterceptedService } from "../core/http-service";

export const getBrandListService = async () =>
  await httpInterceptedService("/admin/brand-list").then((res) => res.data);

export const getBrandService = async (id) => await httpInterceptedService(`/admin/brand/${id}`).then((res) => res.data);

export const createBrandService = async (data) =>
  await httpInterceptedService.post(`/admin/brand`, data).then((res) => res.data);

export const updateBrandService = async ({ id, data }) =>
  await httpInterceptedService.patch(`/admin/brand/${id}`, data).then((res) => res.data);

export const brandListBySlug = async (slug) =>
  await httpInterceptedService(`/brand/slug/${slug}`).then((res) => res.data);

export const toggleActiveBrandService = async (id) =>
  await httpInterceptedService.put(`/admin/brand/${id}`).then((res) => res.data);

export const deleteBrandService = async (id) =>
  await httpInterceptedService.delete(`/admin/brand/${id}`).then((res) => res.data);
