import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import './Signup.css';

const CREATE_USER = gql`
mutation CreateUser($First_Name: String!, $Last_Name: String!, $Date_of_Birth: String!, $Email: String!, $Password: String!) {
  createUser(First_Name: $First_Name, Last_Name: $Last_Name, Date_of_Birth: $Date_of_Birth, Email: $Email, Password: $Password) {
    First_Name
    Last_Name
    Date_of_Birth
    Email
    Password
  }
}
`;

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  useEffect(() => {
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    createUser({
      variables: {
        First_Name: firstName,
        Last_Name: lastName,
        Date_of_Birth: dateOfBirth,
        Email: email,
        Password: password

      }
    })
    e.target.reset();

  };

  const [createUser] = useMutation(CREATE_USER);

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!email || !password || !dateOfBirth || !lastName || !firstName}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
