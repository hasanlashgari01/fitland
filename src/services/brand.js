import { httpInterceptedService } from "../core/http-service";

export const getBrandListService = async () =>
  await httpInterceptedService("/admin/brand-list").then((res) => res.data);

export const brandListBySlug = async (slug) =>
  await httpInterceptedService(`/brand/slug/${slug}`).then((res) => res.data);
