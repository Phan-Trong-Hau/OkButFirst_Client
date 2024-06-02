import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../utils/apiCaller";

export const fetchAllAccount = createAsyncThunk(
  "/accounts/fetchAllAccount",
  async (params, thunkAPI) => {
    const res = await api.get("/v1/accounts");
    console.log({ res });
    return res.data;
  }
);

export const updateAccount = createAsyncThunk(
  "accounts/updateAccount",
  async (params, thunkAPI) => {
    const res = await api.put(`v1/accounts/${params.email}`, params);
    return res.data;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllAccount.fulfilled, (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    });
    builder.addCase(updateAccount.fulfilled, (state, action) => {
      const index = state.findIndex(
        (product) => product._id === action.payload._id
      );
      state[index] = action.payload;

      console.log({ action });

      console.log({ state });
    });
  },
});

export default accountSlice;
