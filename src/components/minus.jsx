import React from "react";
import { useDispatch } from "react-redux";
import { minus } from "../reducers/countSlice";

const Minus = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(minus())}>-</button>;
};

export default Minus;
