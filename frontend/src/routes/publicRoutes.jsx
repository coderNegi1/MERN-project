// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home.jsx';
import Login from '../pages/login.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Register from '../pages/register.jsx';
import ForgotPassword from "../pages/forgotPassword.jsx";
import PageNotFound from "../pages/pageNotFound.jsx";
import Footer from "../components/common/footer.jsx";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;