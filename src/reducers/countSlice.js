import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { count: 0 },
  reducers: {
    plus: (state) => {
      state.count += 1;
    },
  },
});

export const { plus } = countSlice.actions;
export default countSlice.reducer;
