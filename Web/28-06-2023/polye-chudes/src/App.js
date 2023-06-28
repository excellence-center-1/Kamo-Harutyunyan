import React, { useState } from 'react';
import LoginPage from './login';
import SignupPage from './signup';

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleLoginClick = () => {
    setIsLoginPage(true);
  };

  const handleSignupClick = () => {
    setIsLoginPage(false);
  };

  return (
    <div>
      {isLoginPage ? (
        <LoginPage handleSignupClick={handleSignupClick} />
      ) : (
        <SignupPage handleLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
