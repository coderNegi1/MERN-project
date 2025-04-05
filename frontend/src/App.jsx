import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/components/routes/publicRoutes"; 
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;


