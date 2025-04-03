import Comment from "../../features/my-account/components/comment";
import { useMyCommentLikes } from "../../hooks/useMyAccount";

const MyCommentLikesPage = () => {
  const { data } = useMyCommentLikes();

  return <div>{data?.length !== 0 && data?.map(({ comment }) => <Comment key={comment._id} comment={comment} />)}</div>;
};

export default MyCommentLikesPage;
