import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { createOrderService, getOrderService, getOrdersService } from "../services/order";

export const useCreateOrder = () =>
  useMutation({
    mutationKey: ["create-order"],
    mutationFn: (data) => createOrderService(data),
  });

export const useOrder = (trackingCode) => {
  return useQuery({
    queryKey: ["order", trackingCode],
    queryFn: () => getOrderService(trackingCode),
  });
};

export const useOrders = (data) =>
  useQuery({
    queryKey: ["orders", data.page ?? 1, data.status],
    queryFn: () => getOrdersService(data),
    placeholderData: keepPreviousData,
  });
