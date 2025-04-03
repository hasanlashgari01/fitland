import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice, findProduct, findProductIndex, removeProduct } from "../../shared/cart";

const initialState = {
  quantity: 0,
  products: [],
  total: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseInCart: (state, action) => {
      let product = null;
      if (state.quantity != 0) {
        product = findProductIndex(state.products, action.payload._id);
      }
      console.log("🚀 ~ product:", product);

      if (product === null || product == -1) {
        state.products?.push(action.payload);
        state.quantity = state.products?.length;
        state.checkout = false;
      } else {
        state.products[product].quantity++;
      }
      state.total = calcTotalPrice(state.products);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseFromCart: (state, action) => {
      const product = findProduct(state.products, action.payload._id);

      if (product.quantity == 1) {
        state.products = removeProduct(state.products, action.payload._id);
        state.quantity = state.products.length;
        state.checkout = false;
      } else {
        const productIndex = findProductIndex(state.products, action.payload._id);
        state.products[productIndex].quantity--;
      }
      state.total = calcTotalPrice(state.products);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
      state.checkout = false;
    },
    checkout: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
      state.checkout = true;
    },
    loadFromLocalStorage: () => {
      const store = JSON.parse(localStorage.getItem("cart"));

      if (store !== null) return store;
    },
  },
});

export const { increaseInCart, decreaseFromCart, checkout, loadFromLocalStorage } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
