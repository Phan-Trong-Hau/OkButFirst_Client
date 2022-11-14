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

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async (params, thunkAPI) => {
        const res = await api.post("v1/products", params);
        return res.data;
    }
);

export const updateProduct = createAsyncThunk(
    "products/updateProduct",
    async (params, thunkAPI) => {
        const res = await api.put("v1/products", params);
        return res.data;
    }
);

export const deleteProduct = createAsyncThunk(
    "products/deleteProduct",
    async (params, thunkAPI) => {
        const res = await api.delete("v1/products");
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
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.push(action.payload);
        });
    },
});

export default productsSlice;
