import { HiOutlineEllipsisVertical, HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useComment, useToggleStatusComment } from "../../../hooks/useComment";
import { cn } from "../../../shared/cn";
import { usePage } from "../../../context/admin-page-context";
import Modal from "../../../components/modal";

const Comment = ({ comment, user, refetch }) => {
  const { isModal, cancelHandler, showModalHandler } = usePage();
  const { data, isLoading } = useComment(comment._id);
  const { mutate: toggleMutate } = useToggleStatusComment();

  const toggleActiveHandler = () => {
    toggleMutate(comment._id);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <>
      <tr className="fade-in opacity-0">
        <td className="table-div">{comment.text}</td>
        <td className="table-div">{user.fullName}</td>
        <td className="table-div">{comment.rate}</td>
        <td className="table-div">{comment.isActive ? "فعال" : "غیرفعال"}</td>
        <td className="table-div flex gap-4">
          <button
            className={cn("action-btn", {
              "bg-teal-500 dark:bg-teal-600": comment.isActive,
              "bg-teal-500/50 dark:bg-teal-600/50": !comment.isActive,
            })}
            onClick={toggleActiveHandler}
          >
            {!comment.isActive ? <HiOutlineEye size={20} /> : <HiOutlineEyeSlash size={20} />}
          </button>
          <button className="action-btn bg-amber-500 dark:bg-amber-600" onClick={() => showModalHandler(comment._id)}>
            <HiOutlineEllipsisVertical size={20} />
          </button>
        </td>
      </tr>
      <Modal isOpen={isModal} cancelHandler={cancelHandler}>
        {!isLoading && data && (
          <>
            <div>
              <h1>{data.product.name}</h1>
            </div>
            <hr />
            <div>{data.user.fullName}</div>
            <div>{data.user.mobile}</div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Comment;
