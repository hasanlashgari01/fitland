import { Link } from "react-router";
import { cn } from "../shared/cn";

const Empty = ({ text = "اینجا خالیه و خبری نیست!", isBorder = true, isRounded = true, isShowLink = true }) => {
  return (
    <div
      className={cn("flex w-full flex-col items-center justify-center space-y-10 bg-white py-14 dark:bg-transparent", {
        "border border-gray-300 dark:border-gray-700": isBorder,
        "rounded-2xl": isRounded,
      })}
    >
      <div>
        <img src="/public/empty.jpg" alt="" />
      </div>
      <h1>{text}</h1>
      {isShowLink && (
        <Link to="/" className="btn accept-btn">
          صفحه اصلی
        </Link>
      )}
    </div>
  );
};

export default Empty;
