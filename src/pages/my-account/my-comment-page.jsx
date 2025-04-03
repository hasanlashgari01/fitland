import Comment from "../../features/my-account/components/comment";
import { useMyComments } from "../../hooks/useMyAccount";
import useTitle from "../../hooks/useTitle";

const MyCommentPage = () => {
  useTitle("پنل ادمین - کامنت ها");
  const { data } = useMyComments();

  return (
    <div>
      <h1 className="text-3xl">نظرات</h1>
      <section className="mt-5 space-y-5">
        {data?.length !== 0 && data?.map(({ comment }) => <Comment key={comment._id} comment={comment} />)}
      </section>
    </div>
  );
};

export default MyCommentPage;
