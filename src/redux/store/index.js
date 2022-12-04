import { configureStore } from "@reduxjs/toolkit";
import merchSlice from "../slice/merch";
import productsSlice from "../slice/products";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        merch: merchSlice.reducer,
    },
});

export default store;
