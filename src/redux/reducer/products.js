import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/apiCaller";
// import * as Types from "../constants/ActionTypes";
export const fetchAllProducts = createAsyncThunk(
    "/products/fetchAllProducts",
    async (params, thunkAPI) => {
        const res = await api.get("/v1/products");
        return res.data;
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.push(...action.payload);
        });
    },
});

export default productsSlice;
