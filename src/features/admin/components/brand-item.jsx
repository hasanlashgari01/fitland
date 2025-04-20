import { HiArrowPath, HiOutlineEye, HiOutlineEyeSlash, HiOutlineTrash } from "react-icons/hi2";
import { usePage } from "../../../context/admin-page-context";
import { useToggleActiveBrand } from "../../../hooks/useBrand";
import { cn } from "../../../shared/cn";
import { useQueryClient } from "@tanstack/react-query";

const BrandItem = ({ _id, name, slug, isActive, productCount }) => {
  const queryClient = useQueryClient();
  const { showModalHandler, showUpdateFormHandler } = usePage();
  const { mutate } = useToggleActiveBrand();

  const toggleActiveHandler = () => {
    mutate(_id, {
      onSuccess: () => queryClient.invalidateQueries(["brand-list"]),
    });
  };

  return (
    <tr>
      <td className="table-div">
        {name} - ({productCount})
      </td>
      <td className="table-div">{slug}</td>
      <td className="table-div">{isActive ? "فعال" : "غیرفعال"}</td>
      <td className="table-div flex gap-4">
        <button className="action-btn bg-red-500 dark:bg-red-600" onClick={() => showModalHandler(_id)}>
          <HiOutlineTrash size={20} />
        </button>
        <button className="action-btn bg-amber-500 dark:bg-amber-600" onClick={() => showUpdateFormHandler(_id)}>
          <HiArrowPath size={20} />
        </button>
        <button
          className={cn("action-btn", {
            "bg-teal-500 dark:bg-teal-600": isActive,
            "bg-teal-500/50 dark:bg-teal-600/50": !isActive,
          })}
          onClick={toggleActiveHandler}
        >
          {!isActive ? <HiOutlineEye size={20} /> : <HiOutlineEyeSlash size={20} />}
        </button>
      </td>
    </tr>
  );
};

export default BrandItem;
