import { httpInterceptedService } from "../core/http-service";

export const createOrderService = async (data) =>
  await httpInterceptedService.post("/order", data).then((res) => res.data);

export const getOrderService = async (trackingCode) =>
  await httpInterceptedService(`/order/code/${trackingCode}`).then((res) => res.data);

export const getOrdersService = async ({ page, status, trackingCode, userSearch }) => {
  return await httpInterceptedService("/admin/orders", {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
      status,
      trackingCode,
      userSearch,
    },
  }).then((res) => res.data);
};
