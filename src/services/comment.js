import { httpInterceptedService } from "../core/http-service";

export const getCommentByProductSlug = async ({ slug, page }) => {
  return await httpInterceptedService(`/comment/slug/${slug}`, {
    params: {
      limit: import.meta.env.VITE_PAGE_LIMIT,
      page,
    },
  }).then((res) => res.data);
};

export const getCommentsService = async ({ page, status, sort }) => {
  let url = "/admin/comments";
  if (status == 1) url += "?status=1";
  else if (status == 0) url += "?status=0";

  return await httpInterceptedService(url, {
    params: {
      page,
      limit: import.meta.env.VITE_PAGE_LIMIT,
      sort,
    },
  }).then((res) => res.data);
};

export const getCommentService = async (id) =>
  await httpInterceptedService(`/admin/comments/${id}`).then((res) => res.data);

export const toggleCommentStatusService = async (id) =>
  await httpInterceptedService.patch(`/admin/comments/${id}`).then((res) => res.data);
