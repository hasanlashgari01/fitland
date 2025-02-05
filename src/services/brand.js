import { httpInterceptedService } from "../core/http-service";

export const getBrandListService = async () =>
  await httpInterceptedService("/admin/brand-list").then((res) => res.data);
