import { GrUserAdmin } from "react-icons/gr";
import { HiCheckCircle, HiOutlineUser } from "react-icons/hi2";
import { IoBan } from "react-icons/io5";
import { usePage } from "../../../context/admin-page-context";
import { cn } from "../../../shared/cn";

const BanItem = ({ user, mobile, createdAt }) => {
  const { fullName, role, verifyMobile } = user;
  const { showModalHandler } = usePage();

  const d = new Date(createdAt);

  return (
    <tr
      className={cn("fade-in opacity-0", {
        "bg-amber-100/75 dark:bg-amber-500/50": role === "ADMIN",
      })}
    >
      <td className="table-div">{fullName}</td>
      <td className="table-div">
        <div className="flex gap-10">
          <span className="min-w-28">{mobile}</span>
          {verifyMobile && <HiCheckCircle size={24} className="fill-secondary-500" />}
        </div>
      </td>
      <td className="table-div">{d.toLocaleDateString("fa-IR")}</td>
      <td className="table-div flex gap-4">
        <button className="action-btn bg-red-500 dark:bg-red-600" onClick={() => showModalHandler(user._id)}>
          <IoBan size={20} />
        </button>
        {role === "USER" ? (
          <button className="action-btn bg-sky-500 dark:bg-sky-600">
            <GrUserAdmin size={20} />
          </button>
        ) : (
          <button className="action-btn bg-teal-500 dark:bg-teal-600">
            <HiOutlineUser size={20} />
          </button>
        )}
      </td>
    </tr>
  );
};
export default BanItem;
