import { HiMiniChevronLeft } from "react-icons/hi2";
import { Link } from "react-router";
import { cn } from "../../../shared/cn";

const Button = ({ href, className }) => {
  return (
    <Link
      to={href}
      className={cn(
        "bg-primary inline-flex w-fit items-center justify-center gap-x-2 rounded-lg px-3 py-2.5 text-white md:px-5",
        className,
      )}
    >
      <span>مشاهده محصولات</span>
      <HiMiniChevronLeft size={24} />
    </Link>
  );
};
export default Button;
