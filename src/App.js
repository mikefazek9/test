import React from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
function App() {
  return (
    <div className="App">
      <Header title="Task App" />
      <AddTask />
    </div>
  );
}

export default App;
