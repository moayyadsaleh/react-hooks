import React, { useState } from "react"; //Import useState
import "../styles.css";

//UseState updates the parts that needs to be changed
function App() {
  const state = useState(2);
  console.log(state[0]);

  function increase() {
    //count++;
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
