import React, { useState } from 'react';
import './signup.css';

const validateEmail = email => typeof email === "string" && email.includes("@");

const SignupPage = ({ handleLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlenameChange = (event) => {
    setname(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log("~~~~~~~~~ testtest");
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.ok) {
        console.log('Signup successful');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup', error);
    }
    console.log('Signup form submitted');
  };


  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div className="input-container">
          <label>Username</label>
          <input type="text" value={name} onChange={handlenameChange} />
        </div>
        <div className="input-container">
          <label>New Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" disabled={!email || !password || !name}>
          Sign up
          </button>
        <p>
          Already have an account?
          <button onClick={handleLoginClick} >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
