import React from "react";
import "./styles.css";
import Chart from "./chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>Employee Hierarchy Chart</h1>
       
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
