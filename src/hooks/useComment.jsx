import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  getCommentByProductSlug,
  getCommentService,
  getCommentsService,
  toggleCommentStatusService,
} from "../services/comment";

export const useCommentList = ({ slug, page }) =>
  useQuery({
    queryKey: ["comment-list", slug, page],
    queryFn: () => getCommentByProductSlug({ slug, page }),
  });

export const useComments = (page, status, sort) =>
  useQuery({
    queryKey: ["comments", page, status],
    queryFn: () => getCommentsService({ page, status, sort }),
    placeholderData: keepPreviousData,
  });

export const useComment = (id) =>
  useQuery({
    queryKey: ["comment", id],
    queryFn: () => getCommentService(id),
  });

export const useToggleStatusComment = () =>
  useMutation({
    mutationKey: ["toggle-comment"],
    mutationFn: (id) => toggleCommentStatusService(id),
  });
