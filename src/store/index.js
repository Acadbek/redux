import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/countSlice";

export default configureStore({ reducers: countReducer });
