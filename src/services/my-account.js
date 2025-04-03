import { httpInterceptedService } from "../core/http-service";

export const myProductLikesService = async () => await httpInterceptedService("/user/my-likes").then((res) => res.data);

export const myCommentsService = async () => await httpInterceptedService("/user/my-comments").then((res) => res.data);

export const myCommentLikesService = async () =>
  await httpInterceptedService("/user/my-comment-likes").then((res) => res.data);

export const myOrdersService = async (status) => {
  return await httpInterceptedService("/user/my-orders", {
    params: {
      status,
    },
  }).then((res) => res.data);
};

export const myOrdersCountService = async () =>
  await httpInterceptedService("/user/my-orders/count").then((res) => res.data);
