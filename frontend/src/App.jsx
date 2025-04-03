<<<<<<< HEAD
// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Only one Router
import AppRoutes from './routes/publicRoutes'; //use the now corrected AppRoutes

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Login from "./pages/login";
import Register from "./pages/register.jsx";
import ForgotPassword from "./pages/forgotPassword.jsx";
import PageNotFound from "./pages/pageNotFound.jsx";
import Footer from "./components/common/footer.jsx";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pagenotfound" element={<PageNotFound/>}></Route>
        <Route path="/footer" element={<Footer/>}></Route>
      </Routes>
    </BrowserRouter>
>>>>>>> origin/main
  );
}

export default App;