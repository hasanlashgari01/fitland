import { HiOutlineCheckCircle, HiOutlineClock, HiStar } from "react-icons/hi2";

const Comment = ({ comment }) => {
  return (
    <div
      className="fade-in flex flex-col rounded-lg bg-white px-3 py-4 opacity-0 lg:flex-row lg:items-center lg:justify-between lg:p-6"
      key={comment._id}
    >
      <div>
        <p className="text-sm lg:text-base">{comment.text}</p>
      </div>
      <div className="flex items-center justify-between gap-5 max-lg:mt-3">
        <span className="flex items-center gap-1 align-middle text-sm leading-5">
          {comment.rate} <HiStar className="size-5 text-amber-500" />
        </span>
        <span>
          {comment.isActive ? (
            <HiOutlineCheckCircle className="size-5 text-green-500" />
          ) : (
            <HiOutlineClock className="size-5 text-amber-500" />
          )}
        </span>
      </div>
    </div>
  );
};

export default Comment;
