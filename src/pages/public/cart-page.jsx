import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDetails from "../../components/cart-details";
import CartItem from "../../components/cart-item";
import useTitle from "../../hooks/useTitle";
import { calcTotalPrice } from "../../shared/cart";
import { loadFromLocalStorage } from "../../store/cart/cartSlice";
import { useCreateOrder } from "../../hooks/useOrder";
import useDiscountCode from "../../hooks/useDiscountCode";
import Empty from "../../components/empty";

const CartPage = () => {
  useTitle("سبد خرید");
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { mutate } = useCreateOrder();
  const { price, benfit, total } = useDiscountCode({ state });

  useEffect(() => {
    dispatch(loadFromLocalStorage());
  }, []);

  const clearCart = () => {
    localStorage.setItem(
      "cart",
      JSON.stringify({
        quantity: 0,
        products: [],
        total: 0,
        checkout: false,
      }),
    );
  };

  const createOrderHandler = () => {
    if (state.quantity > 0) {
      const products = state.products.map(({ _id, price, quantity }) => {
        return {
          product: _id,
          price,
          quantity,
        };
      });

      mutate({
        price: total.priceWithDiscount ? total.priceWithDiscount : price,
        quantity: state.quantity,
        products: products,
        discount: benfit,
      });
      clearCart();
      setInterval(() => {
        dispatch(loadFromLocalStorage());
      }, 3000);
    }
  };

  return (
    <div className="container flex lg:gap-x-6">
      <div className="flex-1">
        <div className="flex w-full flex-col justify-between gap-6 max-lg:mt-8 max-lg:pb-26">
          <div className="grid flex-1 gap-2 md:gap-6">
            {state.quantity > 0 ? (
              state.products.map((product) => <CartItem key={product._id} {...product} />)
            ) : (
              <Empty text="سبد خالیه" />
            )}
          </div>
          <CartDetails state={state} className="lg:hidden" />
        </div>
      </div>

      <div className="lg:basis-96">
        <div className="inset-x-0 bottom-0 rounded-lg border-gray-300 px-6 pb-6 max-lg:fixed max-lg:mt-5 max-lg:border-t max-lg:bg-gray-100 lg:border lg:pt-5">
          <CartDetails state={state} className="max-lg:hidden" />
          <div className="mt-5 flex justify-between text-sm max-lg:items-center lg:flex-col lg:text-base">
            <div className="flex flex-col gap-2 lg:mb-4 lg:flex-row lg:justify-between">
              <span>مجموع</span>
              <span>{state?.quantity > 0 ? calcTotalPrice(state.products).toLocaleString() : 0} تومان</span>
            </div>
            <button
              className="bg-primary disabled:bg-primary/50 h-11 min-w-32 rounded-lg px-5 text-white md:cursor-pointer"
              onClick={createOrderHandler}
              disabled={state.quantity == 0}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
