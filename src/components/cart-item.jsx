import { calcDiscountPriceAndBenfit } from "../shared/cart";
import DecreaseBtn from "./decrease-btn";
import IncreaseBtn from "./increase-btn";

const CartItem = (props) => {
  const { _id, name, cover, price, discount, quantity } = props;

  const { discountPrice } = calcDiscountPriceAndBenfit(price, discount, quantity);

  return (
    <div key={_id} className="gap-2 rounded border border-gray-200 p-2 md:gap-6 md:p-4">
      <div className="flex">
        <div className="h-16 min-w-16">
          <img src={`http://localhost:3000/public/images/${cover}`} alt="" className="max-h-full object-cover" />
        </div>
        <div>
          <h1 className="text-sm/relaxed">{name}</h1>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span>{discountPrice.toLocaleString()} تومان</span>
        </div>

        <div className="flex h-13 items-center gap-2 md:gap-6">
          <IncreaseBtn {...props} />
          <span className="min-w-6 text-center">{quantity || 0}</span>
          <DecreaseBtn _id={_id} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
