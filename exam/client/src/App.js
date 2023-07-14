import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import TrelloBoard from './board';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleButtonClick = () => {
    setCurrentPage(currentPage === 'login' ? 'signup' : 'login');
  };

  const handleLoginSuccess = () => {
    setCurrentPage('TrelloBoard');
  };

  return (
    <div className="container">
      {currentPage === 'login' && <LoginPage onLoginSuccess={handleLoginSuccess} />}
      {currentPage === 'signup' && <SignupPage />}
      {currentPage === 'TrelloBoard' && <TrelloBoard />}
      {currentPage !== 'TrelloBoard' && (
        <button className="toggle-button" onClick={handleButtonClick}>
          {currentPage === 'login' ? 'Go to Signup' : 'Go to Login'}
        </button>
      )}
    </div>
  );
};

export default App;
