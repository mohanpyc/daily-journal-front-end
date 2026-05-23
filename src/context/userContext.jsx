import React, { createContext, useContext, useState } from "react";
import { registerUser, loginUser } from "../api/axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (userInput) => {
    setLoading(true);

    try {
      await registerUser(userInput);
      return true;
    } catch (err) {
      console.error("Registration failed", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (userInput) => {
    setLoading(true);

    try {
      const response = await loginUser(userInput);

      localStorage.setItem("token", response.data.token);

      return true;
    } catch (err) {
      console.error("Login failed", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };