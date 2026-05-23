import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/axios';
import './registration.css';

const Registration = () => {
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleUserInp = (type, inp) => {
    setUserInput((prev) => ({
      ...prev,
      [type]: inp.target.value
    }));
  };

  const handleRegister = async () => {
    if (!userInput.username || !userInput.email || !userInput.password) {
      return;
    }

    setLoading(true);

    try {
      await registerUser(userInput);

      // clear form
      setUserInput({
        username: "",
        email: "",
        password: ""
      });

      // navigate to login page
      navigate("/login");

    } catch (err) {
      console.error("Registration failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registerPage">

      <div className="registerCard">

        <div className="registerHeader">
          <h1>Create Account</h1>
          <p>Register to start using your journal dashboard</p>
        </div>

        <div className="registerForm">

          <div className="formGroup">
            <label>Username</label>
            <input
              onChange={(e) => handleUserInp("username", e)}
              value={userInput.username}
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input
              onChange={(e) => handleUserInp("email", e)}
              value={userInput.email}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="formGroup">
            <label>Password</label>
            <input
              onChange={(e) => handleUserInp("password", e)}
              value={userInput.password}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button
            onClick={handleRegister}
            className="registerBtn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Register"}
          </button>

        </div>

        <div className="registerFooter">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

      </div>

    </div>
  );
};

export default Registration;