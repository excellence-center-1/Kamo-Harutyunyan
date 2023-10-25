// src/components/CreateTask.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Board.css";

const CreateTask = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const navigate = useNavigate();

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const navigateToMainPage = () => {
    navigate("/board");
  };

  const handleSubmitTask = async () => {
    if (!taskName || !description || !priority) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newTask = {
      taskName,
      description,
      priority,
    };

    const userData = {
      name: taskName,
      description: description,
      priority: priority,
    };

    try {
      const response = await fetch("http://localhost:4000/createtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Task added successfully");
        setTimeout(() => {
          navigate("/board");
        }, 0);
      } else {
        console.log("Task adding failed");
      }
    } catch (error) {
      console.error(error);
    }
    setTasks([...tasks, newTask]);
    setTaskName("");
    setDescription("");
    setPriority("");
  };

  const handleCancel = () => {
    setTaskName("");
    setDescription("");
    setPriority("");
  };

  return (
    <div className="createTask">
      <h1>Create Task</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={handleTaskNameChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={handleSubmitTask}>Submit</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={navigateToMainPage}>Main Page</button>
      </div>
    </div>
  );
};

export default CreateTask;
