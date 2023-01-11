import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "../features/counter/counterSlicer";

export const store = configureStore({
  reducer: {
    counter: counterSlicer,
  },
});
