import { useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { loadFromLocalStorage } from "../store/cart/cartSlice";

const BagIcon = () => {
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, []);

  return (
    <Link to="/cart">
      <div className="icon-box">
        <HiOutlineShoppingBag size={22} />
        <span className="bg-primary text-tiny absolute -top-1 -right-1 flex size-5.5 items-center justify-center rounded-full border-2 border-white text-white">
          {state.quantity}
        </span>
      </div>
    </Link>
  );
};
export default BagIcon;
