import React from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Board from './components/Board';
import CreateTask from './components/CreateTask';
import TaskList from './components/Tasks';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/board" element={<Board />} />
        <Route path='/createtask' element={<CreateTask />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path='/' element={<Navigate to='register' />} />
      </Routes>
    </Router>
  );
}

export default App;