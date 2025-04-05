// components/routes/AppRoutes.jsx

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Home from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";
import ForgotPassword from "../../pages/forgotPassword";
import PageNotFound from "../../pages/pageNotFound";
import UserDashboard from "../../pages/user/userDashboard";
import AdminDashboard from "../../pages/admin/adminDashboard";

// Import the Protected Routes (PrivateRoute and AdminRoute)
import PrivateRoute from "../routes/privateRoutes";
import AdminRoute from "../routes/adminRoutes";

function AppRoutes() {
    const [auth] = useAuth(); // Get auth context (user and token)

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected User Routes */}
            <Route
                path="/dashboard/user"
                element={
                    <PrivateRoute>
                        <UserDashboard />
                    </PrivateRoute>
                }
            />

            {/* Protected Admin Routes */}
            <Route
                path="/dashboard/admin"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            />

            {/* Role-based Redirection */}
            {auth?.isLoggedIn && (
                <Route
                    path="/dashboard"
                    element={
                        <Navigate
                            to={`/dashboard/${auth.user?.role === "1" ? "admin" : "user"}`}
                        />
                    }
                />
            )}

            {/* Catch-all Route (Page Not Found) */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;
