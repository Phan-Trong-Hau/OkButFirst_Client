import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/apiCaller";


export const fetchAllMerch = createAsyncThunk(
    "/merch/fetchAllMerch",
    async (params, thunkAPI) => {
        const res = await api.get("/v1/merch");
        return res.data;
    }
);

export const createMerch = createAsyncThunk(
    "merch/createMerch",
    async (params, thunkAPI) => {
        const res = await api.post("v1/merch", params);
        return res.data;
    }
);

export const updateMerch = createAsyncThunk(
    "merch/updateMerch",
    async (params, thunkAPI) => {
        const res = await api.put(`v1/merch/${params.merchId}`, params);
        return res.data;
    }
);

export const deleteMerch = createAsyncThunk(
    "merch/deleteMerch",
    async (params, thunkAPI) => {
        const res = await api.delete(`v1/merch/${params._id}`);
        return res.data;
    }
);

const merchSlice = createSlice({
    name: "merch",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllMerch.fulfilled, (state, action) => {
            state.push(...action.payload);
        });
        builder.addCase(createMerch.fulfilled, (state, action) => {
            state.push(action.payload);
        });
        builder.addCase(updateMerch.fulfilled, (state, action) => {
            const index = state.findIndex(
                (product) => product._id === action.payload._id
            );
            state[index] = action.payload;
        });
        builder.addCase(deleteMerch.fulfilled, (state, action) => {
            let index = state.findIndex(
                ({ _id }) => _id === action.payload._id
            );
            state.splice(index, 1);
        });
    },
});

export default merchSlice;
