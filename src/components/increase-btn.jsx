import { HiOutlinePlus } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { increaseInCart } from "../store/cart/cartSlice";

const IncreaseBtn = (props) => {
  const { _id, cover, name, price, discount } = props;
  const dispatch = useDispatch();

  return (
    <button
      className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 md:size-10"
      onClick={() => dispatch(increaseInCart({ _id, cover, name, price, discount }))}
    >
      <HiOutlinePlus className="size-4 md:size-5" />
    </button>
  );
};

export default IncreaseBtn;
