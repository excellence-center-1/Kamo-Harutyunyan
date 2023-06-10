import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        <button onClick={() => handlePageChange('login')}>Login</button>
        <button onClick={() => handlePageChange('signup')}>Sign Up</button>
      </div>
      {currentPage === 'login' ? <Login /> : <Signup />}
    </div>
  );
};

export default App;
