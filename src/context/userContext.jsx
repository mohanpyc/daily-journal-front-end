import React, { createContext, useContext, useState } from "react";
import { registerUser, loginUser, addJournal } from "../api/axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (userInput) => {
    setLoading(true);

    try {
      const data = await registerUser(userInput);

      return {
        success: true,
        data
      };
    } catch (err) {
      console.error("Registration failed", err);

      return {
        success: false,
        message: err.response?.data?.message || "Registration failed"
      };
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (userInput) => {
    setLoading(true);

    try {
      const response = await loginUser(userInput);

      localStorage.setItem("token", response.data.token);

      return {
        success: true,
        data: response.data
      };
    } catch (err) {
      console.error("Login failed", err);

      return {
        success: false,
        message: err.response?.data?.message || "Login failed"
      };
    } finally {
      setLoading(false);
    }
  };

  const handleJournalEntry = async (journalData) => {
    setLoading(true);

    try {
      const data = await addJournal(journalData);

      return {
        success: true,
        data
      };
    } catch (err) {
      console.error("Add journal failed", err);

      return {
        success: false,
        message: err.response?.data?.message || "Add journal failed"
      };
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        handleJournalEntry,
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