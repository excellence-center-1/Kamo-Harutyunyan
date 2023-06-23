import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';
import './Signup.css';

const CREATE_USER = gql`
  mutation CreateUser(
    $first_name: String!
    $last_name: String!
    $date_of_birth: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      date_of_birth: $date_of_birth
      email: $email
      password: $password
    ) {
      first_name
      last_name
      date_of_birth
      email
      password
    }
  }
`;

const Signup = ({ onSignupSuccess }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');

  useEffect(() => { }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUser({
      variables: {
        first_name: firstName,
        last_name: lastName,
        date_of_birth: date_of_birth,
        email: email,
        password: password,
      },
    });

    // Call the onSignupSuccess callback to switch to the login page
    onSignupSuccess();

    // Reset the form
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setDateOfBirth('');
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
            value={date_of_birth}
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
        <button type="submit" disabled={!email || !password || !date_of_birth || !lastName || !firstName}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
