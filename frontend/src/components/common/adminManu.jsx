// src/components/AdminSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div>
      <h3>Admin Dashboard</h3>
      <ul>
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/admin/product-management">Manage Products</Link></li>
        <li><Link to="/admin/order-management">Manage Orders</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
