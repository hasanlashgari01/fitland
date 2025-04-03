import { useEffect, useState } from "react";
import { calcDiscount, calcTotalBenfit, calcTotalPrice } from "../shared/cart";
import toast from "react-hot-toast";

const useDiscountCode = ({ state }) => {
  const [code, setCode] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [discount, setDiscount] = useState({ type: null, amount: 0 });
  const [total, setTotal] = useState({ priceWithDiscount: null, benfitWithDiscount: null });

  const price = calcTotalPrice(state.products);
  const benfit = calcTotalBenfit(state.products);

  useEffect(() => {
    if (state.quantity > 0) {
      if (discount.type === "PERCENT") {
        setTotal({
          priceWithDiscount: calcDiscount(price, discount.amount),
          benfitWithDiscount: price - calcDiscount(price, discount.amount) + benfit,
        });
      } else if (discount.type === "AMOUNT") {
        setTotal({
          priceWithDiscount: price - discount.amount,
          benfitWithDiscount: benfit + discount.amount,
        });
      }
    }
  }, [discount, code, price, benfit]);

  const discountHandler = ({ error, mutate }) => {
    mutate(code);

    if (error) {
      setIsDisabled(false);
      toast.error("کد تخفیف وجود ندارد");
    } else {
      setIsDisabled(true);
      toast.success("کد تخفیف ثبت شد");
    }
  };

  const clearDiscountHandler = () => {
    setCode("");
    setDiscount({ type: null, amount: 0 });
    setTotal({ priceWithDiscount: null, benfitWithDiscount: null });
    setIsDisabled(false);
    toast.success("کد تخفیف حذف شد");
  };

  return {
    code,
    setCode,
    isDisabled,
    discount,
    setDiscount,
    total,
    price,
    benfit,
    discountHandler,
    clearDiscountHandler,
  };
};

export default useDiscountCode;
