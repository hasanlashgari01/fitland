import { useEffect, useState } from "react";
import NotFoundBox from "../../../components/not-found-box";
import { useCommentList } from "../../../hooks/useComment";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import Comments from "./comments";

const CommentList = ({ slug }) => {
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

  if (isLoading) return null;

  return (
    <div className="mt-10">
      {comments.length === 0 ? (
        <NotFoundBox data={comments} value="نظری" />
      ) : (
        <Comments comments={comments} lastCommentRef={lastCommentRef} />
      )}
    </div>
  );
};

export default CommentList;
