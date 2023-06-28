import React, { useState } from 'react';
import './login.css';

const LoginPage = ({ handleSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" disabled={!email || !password}>
          Login
        </button>
        <p>
          Don't have an account?
          <button onClick={handleSignupClick}>
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
