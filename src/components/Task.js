import React from 'react';
import './SigninSignup.css';
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default Task;
