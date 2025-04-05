// components/routes/AdminRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// AdminRoute for admin authentication check
const AdminRoute = ({ children }) => {
    const [auth] = useAuth(); // Get auth context (user and token)

    if (!auth?.isLoggedIn || auth?.user?.role !== "1") {
        // Redirect to user dashboard if not authenticated or not an admin
        return <Navigate to="/dashboard/user" />;
    }

    return children; // If authenticated and admin, render children
};

export default AdminRoute;
