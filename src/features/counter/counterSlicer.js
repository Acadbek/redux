import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("getUsers", async (payload) => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const counterSlice = createSlice({
  name: "counter",
  initialState: { data: [], status: "", value: 0 },
  reducers: {
    plusByAmount: (state, { payload }) => {
      state.value += payload;
    },
    minusByAmount: (state, { payload }) => {
      state.value -= payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { plusByAmount, minusByAmount } = counterSlice.actions;
export default counterSlice.reducer;
