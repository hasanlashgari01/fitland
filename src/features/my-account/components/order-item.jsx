import { Link } from "react-router";
import Image from "../../../components/image";
import { cn } from "../../../shared/cn";
import { transformDateWithPersianMonth } from "../../../shared/date";

const OrderItem = ({ trackingCode, price, discount, status, items, createdAt }) => {
  const images = items?.map((item) => item.product.images).flat();

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <div
        className={cn("flex justify-between py-5.5 pr-11.5 pl-5.5", {
          "bg-gray-50": status === "PENDING",
          "bg-red-50": status === "CANCELLED",
          "bg-green-50": status === "DELIVERED",
        })}
      >
        <div className="flex gap-8">
          <h3>{transformDateWithPersianMonth(createdAt)}</h3>
          <div>
            <span className="text-gray-400">کد سفارش : </span>
            <span>{trackingCode}</span>
          </div>
          <div>
            <span className="text-gray-400">
              {status === "PENDING" && "مبلغ قابل پرداخت : "}
              {status === "CANCELLED" && "مبلغ : "}
              {status === "DELIVERED" && "مبلغ پرداخت شده‌ : "}
            </span>
            <span>{price.toLocaleString()} تومان</span>
          </div>
          {discount > 0 && (
            <div>
              <span className="text-gray-400">تخفیف : </span>
              <span>{discount.toLocaleString()} تومان</span>
            </div>
          )}
        </div>
        <Link to={`${trackingCode}`}>مشاهده سفارش</Link>
      </div>
      <div className="mt-6 flex gap-x-2 pr-11.5 pb-6 pl-5.5">
        {images.map((image) => (
          <div key={image} className="size-24 overflow-hidden rounded-lg">
            <Image cover={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
