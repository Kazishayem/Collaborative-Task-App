import React, { useState } from 'react';
import './SigninSignup.css';
const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
  };

  return (
    <form onSubmit={handleSubmit}  >
      <input className='form-container'
        type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea className='form-Description'  placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required
      />
      <input className='form-container' type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required
      />
      <select className='form-container' value={priority} onChange={(e) => setPriority(e.target.value)} required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className='form-btn' type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
