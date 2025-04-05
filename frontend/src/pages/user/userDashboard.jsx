// src/pages/user/UserDashboard.js
import React from 'react';
import Layout from '../../components/common/layout';
import { useAuth } from '../../contexts/AuthContext.jsx';

const UserDashboard = () => {
  const { user } = useAuth();
  console.log("UserDashboard - user:", user); // Add this line

  return (
    <Layout>
      <div className='flex'>
        <div className="p-4 w-full">
          <h1 className="text-2xl font-semibold mb-4">Welcome to the User Dashboard</h1>
          {user && (
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">User Information</h2>
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

export default UserDashboard;