import { HiArrowPath, HiOutlineEye, HiOutlineEyeSlash, HiOutlineTrash } from "react-icons/hi2";
import { useToggleActiveCategory } from "../../../hooks/useCategory";
import { cn } from "../../../shared/cn";

const CategoryItem = ({ _id, name, slug, isActive, onShowModal, refetch }) => {
  const { mutate: toggleMutate } = useToggleActiveCategory();

  const toggleActiveHandler = () => {
    toggleMutate(_id);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <tr className="fade-in invisible opacity-0">
      <td className="table-div">{name}</td>
      <td className="table-div">{slug}</td>
      <td className="table-div">{isActive ? "فعال" : "غیرفعال"}</td>
      <td className="table-div flex gap-4">
        <button className="cursor-pointer rounded bg-red-400 p-1 dark:bg-red-600" onClick={() => onShowModal(_id)}>
          <HiOutlineTrash size={20} />
        </button>
        <button className="cursor-pointer rounded bg-amber-400 p-1 dark:bg-amber-600">
          <HiArrowPath size={20} />
        </button>
        <button
          className={cn("cursor-pointer rounded p-1 transition-colors", {
            "bg-teal-400 dark:bg-teal-600": isActive,
            "bg-teal-400/50 dark:bg-teal-600/50": !isActive,
          })}
          onClick={toggleActiveHandler}
        >
          {!isActive ? <HiOutlineEye size={20} /> : <HiOutlineEyeSlash size={20} />}
        </button>
      </td>
    </tr>
  );
};

export default CategoryItem;
