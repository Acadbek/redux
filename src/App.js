import { useSelector } from "react-redux";
import { Plus, Minus, Reset } from "./components";

function App() {
  const store = useSelector((state) => state.count);
  return (
    <div className="App">
      <Plus /> {store} <Minus />
      <Reset />
    </div>
  );
}

export default App;
