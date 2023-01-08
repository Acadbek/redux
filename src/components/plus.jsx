import React from "react";
import { useDispatch } from "react-redux";
import { plus } from "../reducers/countSlice";

const Plus = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(plus())}>+</button>;
};

export default Plus;
