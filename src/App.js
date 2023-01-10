import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, add, deleted } from "./store/slicer/counter";

const App = () => {
  const [name, setName] = useState("");
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const id = Math.random();

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch(inc(5))}>+</button>
      <button onClick={() => dispatch(dec(5))}>-</button>
      <button onClick={() => dispatch(add({ name, id }))}>add</button>
      {student.data}
      {student.name}
      {student.names.map(({ id, name }) => (
        <div key={id}>
          <p>{name}</p>
          <button onClick={() => dispatch(deleted(id))}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
