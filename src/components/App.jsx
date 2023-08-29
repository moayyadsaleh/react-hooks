import React, { useState } from "react";
import "../styles.css";

//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000)
function currentTime() {
  return new Date().toLocaleTimeString();
}
function App() {
  return (
    <div className="container">
      <h1>{currentTime()}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
