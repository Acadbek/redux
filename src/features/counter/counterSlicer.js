import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk('')

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    plusByAmount: (state, action) => {
      state.value += action.payload;
    },
    minusByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { plusByAmount, minusByAmount } = counterSlice.actions;
export default counterSlice.reducer;
