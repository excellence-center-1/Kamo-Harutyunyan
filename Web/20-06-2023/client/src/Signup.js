import React, { useState, useEffect } from 'react';
import './Signup.css';
import { gql, useMutation } from '@apollo/client';


const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

const Signup = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const First_Name = e.target.First_Name.value;
    const Last_Name = e.target.Last_Name.value;
    const Date_of_Birth = e.target.Date_of_Birth.value;
    const Email = e.target.Email.value;
    const Password = e.target.Password.value;

    createUser({ variables: { First_Name, Last_Name, Date_of_Birth, Email, Password } })
      .then(() => {
        // Refetch the users after successful creation
        // You can skip this if you're using real-time updates or subscriptions
        client.resetStore();
      })
      .catch((error) => {
        console.error(error);
      });

    e.target.reset();
  };

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
          <button type="submit">Sign Up</button>
        </form>
      </div>
  );
};

export default Signup;
