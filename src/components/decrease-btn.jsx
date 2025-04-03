import { HiOutlineMinus, HiOutlineTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { decreaseFromCart } from "../store/cart/cartSlice";

const DecreaseBtn = ({ _id, quantity }) => {
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <button
      className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 md:size-10"
      onClick={() => dispatch(decreaseFromCart({ _id }))}
    >
      {state.quantity == 0 && quantity == 1 ? (
        <HiOutlineTrash className="size-4 md:size-5" />
      ) : (
        <HiOutlineMinus className="size-4 md:size-5" />
      )}
    </button>
  );
};

export default DecreaseBtn;
