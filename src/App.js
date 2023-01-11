import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  minusByAmount,
  plusByAmount,
} from "./features/counter/counterSlicer";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // const id = Math.random();
  useEffect(() => {
    dispatch(fetchUsers());
    console.log(count.data);
  }, []);
  // console.log(count);

  return (
    <div>
      {count.value}
      <button onClick={() => dispatch(plusByAmount(2))}>plus</button>
      <button onClick={() => dispatch(minusByAmount(2))}>minus</button>
      {count.data.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default App;
