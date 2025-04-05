// src/pages/admin/AdminDashboard.js
import React from 'react';
import AdminSidebar from '../../components/common/adminManu';
import Layout from '../../components/common/layout';
import { useAuth } from '../../contexts/AuthContext.jsx';

const AdminDashboard = () => {
  const { user } = useAuth();
  console.log("AdminDashboard - user:", user); // Add this line

  return (
    <Layout>
      <div className='flex'>
        <div className='w-3/12'><AdminSidebar /></div>
        <div className="p-4 w-9/12">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the Admin Dashboard</h1>
          {user && (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">Admin Information</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              {user.contact && <p><strong>Contact:</strong> {user.contact}</p>}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;