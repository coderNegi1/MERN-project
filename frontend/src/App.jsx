import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx';
import Login from './pages/login.jsx'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
