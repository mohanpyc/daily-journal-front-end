import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './registration.css';

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, loading } = useUser();

  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const handleUserInp = (type, value) => {
    setUserInput((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  const handleSubmit = async () => {
    const success = await handleLogin(userInput);

    if (success) {
      navigate('/home');
    } else {
    }
  };

  return (
    <div className="registerPage">

      <div className="registerCard">

        <div className="registerHeader">
          <h1>Welcome Back</h1>
          <p>Login to continue</p>
        </div>

        <div className="registerForm">

          <div className="formGroup">
            <label>Email</label>
            <input
              value={userInput.email}
              onChange={(e) => handleUserInp("email", e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="formGroup">
            <label>Password</label>
            <input
              value={userInput.password}
              onChange={(e) => handleUserInp("password", e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          </div>

          <button onClick={handleSubmit} className="registerBtn">
            {loading ? "Logging in..." : "Login"}
          </button>

        </div>

        <div className="registerFooter">
          <p>
            Don’t have an account? <Link to="/">Register</Link>
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;