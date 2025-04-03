import { HiXMark } from "react-icons/hi2";
import { usePage } from "../context/admin-page-context";

const DeleteModal = ({ title, body, deleteMutate, refetch }) => {
  const { cancelHandler, deleteHandler } = usePage();

  return (
    <>
      <div className="flex items-center justify-between border-b border-slate-300 p-5 dark:border-slate-700 text-black">
        <h4 className="title">{title}</h4>
        <span
          className="flex size-6 cursor-pointer items-center justify-center rounded border border-slate-300 dark:border-slate-700"
          onClick={() => cancelHandler()}
        >
          <HiXMark size={20} />
        </span>
      </div>
      <div className="body flex-1 border-b border-slate-300 p-5 dark:border-slate-700">
        <p>{body}</p>
      </div>
      <div className="flex justify-end gap-3 p-5">
        <button className="btn" onClick={cancelHandler}>
          انصراف
        </button>
        <button className="delete-btn" onClick={() => deleteHandler({ mutate: deleteMutate, refetch })}>
          حذف
        </button>
      </div>
    </>
  );
};

export default DeleteModal;
