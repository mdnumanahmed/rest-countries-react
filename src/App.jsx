import React from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-4xl font-bold my-6">
        Welcome to Bongo Travelers Group
      </h1>
      <Countries></Countries>
    </div>
  );
}

export default App;
