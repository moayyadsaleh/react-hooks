import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

var count = 0;
function increase() {
  count++;
  root.render(
    <React.StrictMode>
      <App />
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  </React.StrictMode>
);

reportWebVitals();
