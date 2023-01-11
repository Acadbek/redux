import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { minusByAmount, plusByAmount } from "./features/counter/counterSlicer";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const id = Math.random();
  console.log(count.value);

  return (
    <div>
      {count.value}
      <button onClick={() => dispatch(plusByAmount(2))}>plus</button>
      <button onClick={() => dispatch(minusByAmount(2))}>minus</button>
    </div>
  );
};

export default App;
