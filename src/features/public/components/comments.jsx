import Comment from "../../../components/comment";

const Comments = ({ comments, lastCommentRef }) => {
  return (
    <div className="mt-10">
      <div className="space-y-5">
        {comments.length > 0 &&
          comments?.map((comment, index) => {
            const isLast = index === comments.length - 1;

            return <Comment key={comment._id} isLast={isLast} lastCommentRef={lastCommentRef} {...comment} />;
          })}
      </div>
    </div>
  );
};

export default Comments;
