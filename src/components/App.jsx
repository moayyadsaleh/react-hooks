import React, { useState } from "react"; //Import useState
import "../styles.css";

//UseState updates the parts that needs to be changed
function App() {
  const [count, setCount] = useState(0);

  //const [red, green, blue] = [116, 185, 255]; //Deconstruction arrays

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
