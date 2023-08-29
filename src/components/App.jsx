import React, { useState, useEffect } from "react";
import "../styles.css";

function currentTime() {
  return new Date().toLocaleTimeString();
}

function App() {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(currentTime());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const startInterval = () => {
    setInterval(() => {
      setTime(currentTime());
    }, 1000);
  };

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={startInterval}>Get Time</button>
    </div>
  );
}

export default App;
