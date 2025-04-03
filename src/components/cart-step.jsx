import { HiOutlineCreditCard, HiOutlineMapPin, HiOutlineShoppingCart } from "react-icons/hi2";
import { cn } from "../shared/cn";

const CartStep = ({ step, className }) => {
  return (
    <div className={cn("cart__step flex items-center justify-between", className)}>
      <div className={cn("cart__step-item", { "cart__step--active": step >= 1 })}>
        <HiOutlineShoppingCart size={24} />
        <span>سبد خرید</span>
      </div>
      <span className="cart__step-line"></span>
      <div className={cn("cart__step-item", { "cart__step--active": step >= 2 })}>
        <HiOutlineMapPin size={24} />
        <span>ثبت نشانی</span>
      </div>
      <span className="cart__step-line"></span>
      <div className={cn("cart__step-item", { "cart__step--active": step == 3 })}>
        <HiOutlineCreditCard size={24} />
        <span>پرداخت</span>
      </div>
    </div>
  );
};

export default CartStep;
