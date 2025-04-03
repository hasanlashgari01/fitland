import { useEffect } from "react";
import { useDiscountByCode } from "../hooks/useDiscount";
import useDiscountCode from "../hooks/useDiscountCode";
import Button from "./button";
import CartDetailsTtem from "./cart-details-item";
import Input from "./input";

const CartDetails = ({ state, className }) => {
  const { data, error, isPending, isSuccess, mutate } = useDiscountByCode();
  const {
    isDisabled,
    code,
    setCode,
    discount,
    setDiscount,
    total,
    price,
    benfit,
    discountHandler,
    clearDiscountHandler,
  } = useDiscountCode({ state });

  useEffect(() => {
    if (data) {
      setDiscount({ type: data.type, amount: data.amount });
    }
  }, [isPending, isSuccess]);

  return (
    <div className={className}>
      <div className="space-y-2 px-1 text-xs max-lg:pb-3 lg:space-y-4 lg:text-sm">
        <>
          <CartDetailsTtem
            title={`کالاها (${state.quantity})`}
            price={`${state.quantity > 0 ? (total.priceWithDiscount ? total.priceWithDiscount : price)?.toLocaleString() : 0} تومان`}
          />
          <CartDetailsTtem
            title="تخفیف"
            price={`${state.quantity > 0 ? (total.benfitWithDiscount ? total.benfitWithDiscount : benfit)?.toLocaleString() : 0} تومان`}
          />
        </>
        <CartDetailsTtem title="هزینه ارسال" price="۵۰,۰۰۰ تومان" />
        <CartDetailsTtem title="ارسال" price="درب منزل" />
      </div>
      <div className="mt-5">
        <div>
          <h3>کد تخفیف</h3>
        </div>
        <div className="mt-3 flex items-center gap-x-3">
          <Input isDisabled={isDisabled} value={code} onChange={setCode} />
          {discount.amount ? (
            <Button text="حذف" className="bg-red-500" onClick={clearDiscountHandler} />
          ) : (
            <Button
              text="ثبت"
              className="bg-amber-400"
              onClick={() => discountHandler({ error, mutate })}
              isDisabled={code.length === 0}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
