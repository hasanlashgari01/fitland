import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { cn } from "../shared/cn";
import { transformDateWithPersianMonth } from "../shared/date";
import Avatar from "./avatar";

const Comment = ({ _id, user, comment, isLast, lastCommentRef }) => {
  return (
    <div className="rounded-lg border border-gray-300 bg-gray-50 p-4 shadow-sm" ref={isLast ? lastCommentRef : null}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar image={user.avatar} name={user.fullName} />
          <span className="mr-2.5 font-semibold text-gray-800">{user.fullName}</span>
        </div>
        <div>{transformDateWithPersianMonth(comment.createdAt)}</div>
      </div>
      <div className="my-2">
        <p className="text-sm text-gray-700">{comment.text}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">امتیاز: {comment.rate}</span>
        <span className="flex items-center gap-2 text-sm text-gray-600">
          {comment.likesCount} <HiOutlineHandThumbUp size={16} className={cn({ "fill-black": comment.isLiked })} />
        </span>
      </div>
    </div>
  );
};

export default Comment;
