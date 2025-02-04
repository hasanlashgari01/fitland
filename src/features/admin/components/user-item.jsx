import { HiCheckCircle, HiOutlineUser } from "react-icons/hi2";
import { IoBan } from "react-icons/io5";
import { cn } from "../../../shared/cn";
import { GrUserAdmin } from "react-icons/gr";

const UserItem = ({ _id, fullName, mobile, email, role, verifyMobile, createdAt, updatedAt }) => {
  const d = new Date(createdAt);

  return (
    <tr className={cn("fade-in invisible opacity-0", { "bg-amber-100/75": role === "ADMIN" })}>
      <td className="table-div">{fullName}</td>
      <td className="table-div">
        <div className="flex gap-10">
          <span className="min-w-28">{mobile}</span>
          {verifyMobile && <HiCheckCircle size={24} className="fill-secondary-500" />}
        </div>
      </td>
      <td className="table-div">{email ? email : "-----"}</td>
      <td className="table-div">{d.toLocaleDateString("fa-IR")}</td>
      <td className="table-div flex gap-4">
        <button className="action-btn bg-red-500 dark:bg-red-600">
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

export default UserItem;
