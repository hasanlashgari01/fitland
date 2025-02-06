import { HiArrowPath, HiOutlineEye, HiOutlineEyeSlash, HiOutlineTrash } from "react-icons/hi2";
import Image from "../../../components/image";
import { usePage } from "../../../context/admin-page-context";
import { useToggleStatusProduct } from "../../../hooks/useProduct";
import { cn } from "../../../shared/cn";

const Product = ({ _id, name, cover, price, discount, inventory, status, refetch }) => {
  const { showModalHandler, showUpdateFormHandler } = usePage();
  const { mutate: toggleMutate } = useToggleStatusProduct();

  const toggleActiveHandler = () => {
    toggleMutate(_id);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  return (
    <tr className="fade-in opacity-0">
      <td className="table-div">
        <div className="size-12 overflow-hidden rounded">
          <Image cover={cover} />
        </div>
      </td>
      <td className="table-div">
        <p className="line-clamp-2">{name}</p>
      </td>
      <td className="table-div text-center">
        {discount !== 0 ? (price - (price * discount) / 100).toLocaleString() : price.toLocaleString()} تومان
      </td>
      <td className="table-div text-center">{discount}</td>
      <td className="table-div text-center">{inventory}</td>
      <td className="table-div text-center">{status === "ACTIVE" ? "فعال" : "غیرفعال"}</td>
      <td className="table-div">
        <div className="flex justify-center gap-4">
          <button className="action-btn bg-red-500 dark:bg-red-600" onClick={() => showModalHandler(_id)}>
            <HiOutlineTrash size={20} />
          </button>
          <button className="action-btn bg-amber-500 dark:bg-amber-600" onClick={() => showUpdateFormHandler(_id)}>
            <HiArrowPath size={20} />
          </button>
          <button
            className={cn("action-btn", {
              "bg-teal-500 dark:bg-teal-600": status,
              "bg-teal-500/50 dark:bg-teal-600/50": !status,
            })}
            onClick={toggleActiveHandler}
          >
            {status === "ACTIVE" ? <HiOutlineEyeSlash size={20} /> : <HiOutlineEye size={20} />}
          </button>
        </div>
      </td>
    </tr>
  );
};
export default Product;
