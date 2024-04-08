import { configureStore } from "@reduxjs/toolkit";
import merchSlice from "../slice/merch";
import productsSlice from "../slice/products";
import accountSlice from "../slice/account";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    merch: merchSlice.reducer,
    account: accountSlice.reducer,
  },
});

export default store;
