import { useEffect, useState } from "react";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { useNewComment } from "../../../hooks/useComment";
import { getMe } from "../../../services/user";

const NewComment = ({ slug, isShow, setIsShow }) => {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState("");
  const { mutate, isPending, isError, error } = useNewComment(slug);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getMe();

      setUser(data);
    };

    fetchUser();
  }, [isShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.length !== 0) {
      mutate(comment);
      setComment("");
    }
  };

  return (
    <div>
      {isShow && (
        <>
          <div className="mr-5 mb-5 flex gap-x-3.5">
            <div className="size-11 overflow-hidden rounded-full md:size-13">
              <img src={user?.avatar || "/public/avatar.png"} alt="" className="size-full" />
            </div>
            <div className="mb-1 flex flex-col justify-between">
              <h3 className="text-base font-semibold">{user.fullName}</h3>
              <h5 className="font-200 text-sm text-gray-600">ثبت نظر جدید </h5>
            </div>
          </div>
          {/* <Input value={comment} onChange={setComment} /> */}
          <textarea
            rows={6}
            placeholder="نظر خود را بنویسید ..."
            className="dark:bg-dark font-danaMedium block w-full rounded-lg bg-gray-100 p-4.5 text-sm text-gray-900 outline-none placeholder:text-slate-500/70 md:p-4 dark:text-white"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <div className="mt-4.5 flex justify-end gap-x-4">
            <Button
              text="لغو"
              onClick={() => setIsShow(false)}
              className="border-primary text-primary hover:bg-primary/10 h-11.5 w-36 border bg-transparent"
            />
            <Button text="ثبت نظر" onClick={handleSubmit} className="h-11.5 w-36 hover:bg-amber-700" />
          </div>
        </>
      )}
    </div>
  );
};

export default NewComment;
