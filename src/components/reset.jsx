import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../reducers/countSlice";

const Reset = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(reset())}>Reset</button>;
};

export default Reset;
