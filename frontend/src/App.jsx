// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Only one Router
import AppRoutes from './routes/publicRoutes'; //use the now corrected AppRoutes

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;