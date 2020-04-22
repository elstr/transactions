import React from "react";
import "./App.css";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Transactions</h1>
      </header>
      <Transactions />
    </div>
  );
}

export default App;
