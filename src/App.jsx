import "./App.css";
import { useState } from "react";
import Exponsivevalue from "./Exponsivevalue";
function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);
  return (
    <div className="App">
      <div className="cont">
        <button className="my-btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count
        </button>
        <Exponsivevalue num={num} />
        <h3>{count}</h3>
      </div>
    </div>
  );
}

export default App;
