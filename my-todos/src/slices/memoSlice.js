import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMemo = createAsyncThunk(
  "memo/getMemo",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/data?username=${payload.username}`
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMemo.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getMemo.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },
    [getMemo.rejected]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: payload?.statusText ? payload.statusText : "Server Error",
      };
    },
  },
});

export default memoSlice.reducer;
