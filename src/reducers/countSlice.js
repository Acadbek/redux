import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    plus: (state) => {
      state.count += 1;
    },
    minus: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { plus, minus, reset } = countSlice.actions;
export default countSlice.reducer;
