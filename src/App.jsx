import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Registration from './pages/registration';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />

      {/* fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;