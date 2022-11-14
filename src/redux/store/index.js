import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slice/products";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

export default store;
