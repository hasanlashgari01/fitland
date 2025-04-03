import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCommentList } from "../../../hooks/useComment";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import Comments from "./comments";

const CommentList = () => {
  const { slug } = useParams();
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCommentList({ slug, page });

  useEffect(() => {
    if (data?.comments?.length) {
      setComments((prevComments) => [
        ...prevComments,
        ...data.comments.filter((newComment) => !prevComments.some((c) => c._id === newComment._id)),
      ]);
    }
  }, [data?.comments]);

  const lastCommentRef = useInfiniteScroll({
    hasMore: data?.hasMore,
    loadMore: () => setPage((prev) => prev + 1),
  });

  if (isLoading && comments.length === 0) return null;

  return <Comments comments={comments} lastCommentRef={lastCommentRef} />;
};

export default CommentList;
