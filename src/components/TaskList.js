import React from "react";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutline";
const TaskList = () => {
  return (
    <div className="task-container">
      <ul>
        <li className="tasklist">Take out Trash</li>
        <RemoveIcon />
        <li className="tasklist">Build React App</li>
        <RemoveIcon />
        <li className="tasklist">feed dog</li>
        <RemoveIcon />
      </ul>
    </div>
  );
};
export default TaskList;
