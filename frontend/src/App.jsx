import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
