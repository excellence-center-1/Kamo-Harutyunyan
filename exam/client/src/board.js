// src/components/TrelloBoard.js
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './board.css';

const TrelloBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [showInputFields, setShowInputFields] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleCreateTask = () => {
    setShowInputFields(true);
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmitTask = async () => {
    const newTask = {
      id: tasks.length + 1,
      taskName,
      description,
      priority,
    };
    const userData = {
      field: taskName,
      description: description,
      priority: priority,
    };

    try {
      const response = await fetch('http://localhost:4000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Task added suceful');
        
      } else {
        console.log('Task adding failed');
       
      }
    } catch (error) {
      console.error(error);
     
    }
    setTasks([...tasks, newTask]);
    setTaskName('');
    setDescription('');
    setPriority('');
    setShowInputFields(false);
  };

  return (
    <div className="trello-board">
      <h1>Trello Board</h1>
      {!showInputFields ? (
        <div className="button-container">
          <button className="create-task-button" onClick={handleCreateTask}>
            <FaPlus />
            Create Task
          </button>
        </div>
      ) : (
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
        </div>
      )}
      <div>
        {tasks.map((task) => (
          <div className="task-container" key={task.id}>
            <div className="square">
              <span className="task-name">{task.taskName.charAt(0)}</span>
            </div>
            <div>
              <h3>{task.taskName}</h3>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrelloBoard;
