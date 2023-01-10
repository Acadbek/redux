import { createSlice } from "@reduxjs/toolkit";

export const counterSlicer = createSlice({
  name: "counter",
  initialState: {
    data: 0,
    name: "",
    names: [
      { id: 1, name: "asad" },
      { id: 2, name: "Sulton" },
    ],
  },
  reducers: {
    inc: (state, action) => {
      void (state.data += action.payload);
    },
    dec: (state, action) => {
      void (state.data -= action.payload);
    },
    add: (state, action) => {
      state.names.push(action.payload);
    },
    deleted: (state, action) => {
      state.names.filter((vl) => action.payload !== vl.id);
    },
  },
});

export default counterSlicer.reducer;
export const { inc, dec, add, deleted } = counterSlicer.actions;
