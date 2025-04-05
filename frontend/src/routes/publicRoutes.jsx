// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter
import Login from '../pages/login.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Register from '../pages/register.jsx'
import ForgotPassword from '../pages/forgotPassword.jsx'
import PageNotFound from '../pages/pageNotFound.jsx'
import Footer from '../components/common/footer.jsx'
import About from '../pages/about.jsx';
import Contact from '../pages/contact.jsx';



function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pagenotfound" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default AppRoutes;