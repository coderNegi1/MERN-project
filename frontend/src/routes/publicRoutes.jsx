// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter
import Login from '../pages/login.jsx';
import Navbar from '../components/common/Navbar.jsx';

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default AppRoutes;