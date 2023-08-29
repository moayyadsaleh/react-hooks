import React, { useState } from "react";
import "../styles.css";

function App() {
  // Declare a new state variable, which we'll call "isStriked"
  const [isStriked, setIsStriked] = useState(false);

  const toggleStrike = () => {
    setIsStriked(!isStriked);
  };

  const strike = () => {
    setIsStriked(true);
  };

  return (
    <div className="container">
      <h1 style={{ textDecoration: isStriked ? "line-through" : "none" }}>
        Milk
      </h1>
      <button onClick={strike}>Strike</button>
      <button onClick={toggleStrike}>Toggle Strike</button>
    </div>
  );
}

export default App;
