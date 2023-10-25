import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      const userData = { email: email, password: password };
      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("userId", data.userId);
          console.log(
            "User logined successfully with id ",
            localStorage.getItem("userId")
          );

          setTimeout(() => {
            navigate("/board");
          }, 1500);
        } else {
          console.log("Error occurred during authentification");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      alert("Please enter valid email");
    }
  };

  return (
    <div className="container">
      <div className="title">Login Page</div>
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label>Email:</label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div className="inputBox">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="button">
          <input type="submit" value="Login" />
        </div>
      </form>
      <p>
        Dont have an account? <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};
export default LoginPage;
