// src/components/Tasks.js
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Tasks.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate("/board");
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:4000/tasks");
        if (response.ok) {
          const data = await response.json();
          setTasks(data);
        } else {
          console.error("Error fetching tasks from the server");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <h2 className="task-name">Task Name: {task.name}</h2>
            <p className="task-description">Description: {task.description}</p>
            <p className="task-priority">Priority: {task.priority}</p>
          </li>
        ))}
      </ul>
      <div className="main-page-button">
        <button  onClick={navigateToMainPage}>
          Main Page
        </button>
      </div>
    </div>
  );
};

export default TaskList;
