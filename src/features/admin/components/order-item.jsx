import { transformDate } from "../../../shared/date";
import OrderItemStatus from "./order-item-status";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";

const OrderItem = ({ trackingCode, user, price, status, createdAt }) => {
  return (
    <div className="flex items-center gap-x-5 px-3.5 py-2 text-xs text-gray-800 lg:h-16 lg:gap-x-10 lg:px-8 lg:text-sm dark:text-gray-200">
      <p className="w-14 lg:w-20">{trackingCode}</p>
      <p className="line-clamp-1 w-24 leading-relaxed lg:line-clamp-2 lg:max-h-11 lg:w-36">{user.fullName}</p>
      <p className="w-24 lg:w-36">{user.mobile}</p>
      <p className="w-12 lg:w-24">{price.toLocaleString()}</p>
      <div className="hidden w-44">{transformDate(createdAt)}</div>
      <div className="w-12 lg:w-36">
        <OrderItemStatus status={status} />
      </div>
      <div>
        <div className="cursor-pointer rounded border border-gray-300 dark:border-gray-800">
          <HiOutlineEllipsisVertical size={24} />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
