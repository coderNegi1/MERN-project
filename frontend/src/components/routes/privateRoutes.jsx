// components/routes/PrivateRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// PrivateRoute for user authentication check
const PrivateRoute = ({ children }) => {
    const [auth] = useAuth(); // Get auth context (user and token)

    if (!auth?.isLoggedIn) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    return children; // If authenticated, render children
};

export default PrivateRoute;
