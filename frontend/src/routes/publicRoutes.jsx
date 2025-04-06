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
import AdminDashboard from '../pages/admin/AdminDashboard.jsx';
import UserDashboard from '../pages/user/UserDashboard.jsx';
import AdminRoute from './adminRoutes.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

function AppRoutes() {
  const { isLoggedIn } = useAuth();
  console.log("Auth Status:", isLoggedIn);

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} /></Route>
        <Route path="/dashboard/user" element={<UserDashboard />} />

      </Routes>
 
    </>
  );
}

export default AppRoutes;
