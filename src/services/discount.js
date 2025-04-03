import { httpInterceptedService } from "../core/http-service";

export const getDiscountByCode = async (code) =>
  await httpInterceptedService(`/discount/code/${code}`).then((res) => res.data);
