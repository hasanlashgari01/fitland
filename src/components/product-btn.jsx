import { useDispatch, useSelector } from "react-redux";
import { calcDiscount } from "../shared/cart";
import { increaseInCart } from "../store/cart/cartSlice";
import DecreaseBtn from "./decrease-btn";
import DiscountBadge from "./discount-badge";
import IncreaseBtn from "./increase-btn";

const ProductBtn = (props) => {
  const { _id, cover, name, price, discount } = props;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const findInCart = state.quantity > 0 && state.products.find((product) => product._id == _id);

  return (
    <div className="bg-primary-100 mt-6 flex justify-between rounded-xl px-4.5 py-5 lg:w-full">
      <div className="flex items-center justify-between">
        {findInCart?.quantity >= 1 ? (
          <div className="flex h-13 items-center gap-2 md:gap-6">
            <IncreaseBtn {...props} />
            <span className="min-w-6 text-center">{findInCart?.quantity || 0}</span>
            <DecreaseBtn _id={_id} quantity={findInCart?.quantity} />
          </div>
        ) : (
          <div>
            <button
              className="bg-primary cursor-pointer rounded-2xl px-8 py-3.5 text-sm text-white md:text-base"
              onClick={() => dispatch(increaseInCart({ _id, cover, name, price, discount, quantity: 1 }))}
            >
              افزودن به سبد خرید
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-primary flex gap-2 font-semibold">
          <span className="text-xl/snug">{calcDiscount(price, discount).toLocaleString()}</span>
          <span className="text-sm/text-xl/snug">تومان</span>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-400 line-through">{price.toLocaleString()}</span>
            <DiscountBadge discount={discount} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductBtn;
