// src/components/UserSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
  return (
    <div>
      <h3>User Dashboard</h3>
      <ul>
        <li><Link to="/user-dashboard">Dashboard</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/orders">Order History</Link></li>
      </ul>
    </div>
  );
};

export default UserSidebar;
