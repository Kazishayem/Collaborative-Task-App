import React, { useState, useEffect } from 'react';
import './SigninSignup.css';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
function Home() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };


    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Wellcome To {localStorage.getItem('name')}</p>
            <p> Username:{localStorage.getItem('username')}</p>
            <p className="text"> My Bio: {localStorage.getItem('bio')}</p>
            <button onClick={logout} className="logout">LogOut</button>

            <h1>Task Management</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />


        </div>
    );
}

export default Home;