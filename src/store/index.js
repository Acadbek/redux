import { configureStore } from "@reduxjs/toolkit";
import counter from "./slicer/counter";

export const store = configureStore({
  reducer: {
    student: counter,
  },
});
