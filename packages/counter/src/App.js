import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <div className="box-btn">
          <button className="btn" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn" onClick={handleIncrement}>
            Increment
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
