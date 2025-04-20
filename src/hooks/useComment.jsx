import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import {
  getCommentByProductSlug,
  getCommentService,
  getCommentsService,
  newCommentService,
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

/* export const useCreateComment = ({ slug }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (content) => createComment(slug, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comment-list", slug, page] });
    },
  });
};
 */
export const useNewComment = (slug) => {
  return useMutation({
    mutationKey: ["new-comment"],
    mutationFn: (comment) => newCommentService(slug, comment),
  });
};
