import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalLoans: 0,
    activeLoans: 0,
    totalUsers: 0,
    newUsers: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/dashboard')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole="admin" />
      <div className="flex-1 bg-gray-100 p-4">
        <AdminNavbar />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Loans */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700">Total Loans</h2>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalLoans}</p>
            </div>
            
            {/* Active Loans */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700">Active Loans</h2>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.activeLoans}</p>
            </div>
            
            {/* Total Users */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalUsers}</p>
            </div>
            
            {/* New Users */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-700">New Users</h2>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.newUsers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
