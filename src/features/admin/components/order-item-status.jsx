import { HiCheckCircle, HiXCircle, HiInformationCircle } from "react-icons/hi2";

const OrderItemStatus = ({ status }) => {
  return (
    <>
      {status === "PENDING" && (
        <div className="flex w-fit items-center justify-center gap-x-2 rounded-lg px-2 py-1 lg:bg-amber-100 dark:lg:bg-amber-950">
          <span className="max-lg:hidden">در انتظار پرداخت</span>
          <HiInformationCircle className="border-amber-500 fill-amber-500" size={20} />
        </div>
      )}
      {status === "DELIVERED" && (
        <div className="flex w-fit items-center justify-center gap-x-2 rounded-lg px-2 py-1 lg:bg-green-100 dark:lg:bg-green-950">
          <span className="max-lg:hidden">پرداخت شده</span>
          <HiCheckCircle className="border-green-500 fill-green-500" size={20} />
        </div>
      )}
      {status === "CANCELLED" && (
        <div className="flex w-fit items-center justify-center gap-x-2 rounded-lg px-2 py-1 lg:bg-red-100 dark:lg:bg-red-950">
          <span className="max-lg:hidden">لغو شده</span>
          <HiXCircle className="border-red-500 fill-red-500" size={20} />
        </div>
      )}
    </>
  );
};

export default OrderItemStatus;
