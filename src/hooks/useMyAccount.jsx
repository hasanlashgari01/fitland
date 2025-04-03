import { useQuery } from "@tanstack/react-query";
import {
  myCommentLikesService,
  myCommentsService,
  myOrdersCountService,
  myOrdersService,
  myProductLikesService,
} from "../services/my-account";

export const useMyProductLikes = () =>
  useQuery({
    queryKey: ["my-product-likes"],
    queryFn: myProductLikesService,
  });

export const useMyComments = () =>
  useQuery({
    queryKey: ["my-comments"],
    queryFn: myCommentsService,
  });

export const useMyCommentLikes = () =>
  useQuery({
    queryKey: ["my-comment-likes"],
    queryFn: myCommentLikesService,
  });

export const useMyOrders = (status) =>
  useQuery({
    queryKey: ["my-orders", status],
    queryFn: () => myOrdersService(status),
  });

export const useMyOrdersCount = () =>
  useQuery({
    queryKey: ["my-orders-count"],
    queryFn: () => myOrdersCountService(),
  });
