// src/components/Board.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Board.css";

const Board = () => {
  const navigate = useNavigate();

  const navigateToCreateTask = () => {
    navigate("/createtask");
  };

  const navigateToTask = () => {
    navigate("/tasks");
  };

  return (
    <div className="board">
      <button type="button" onClick={navigateToCreateTask}>
        Create Task
      </button>
      <button type="button" onClick={navigateToTask}>
        See My Tasks
      </button>
    </div>
  );
};

export default Board;
