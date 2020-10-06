import React from "react";
import TaskList from "./TaskList";
const AddTask = () => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Add Task" />
        <button className="btn">Add</button>
      </form>
      <TaskList />
    </div>
  );
};

export default AddTask;
