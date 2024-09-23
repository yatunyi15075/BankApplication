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
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');

        // Fetch loans data with token
        const loansResponse = await axios.get('http://localhost:5000/api/admin/loans', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const loans = loansResponse.data;
        const totalLoans = loans.length;
        const activeLoans = loans.filter(loan => loan.status === 'active').length;

        // Fetch users data with token
        const usersResponse = await axios.get('http://localhost:5000/api/admin/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const users = usersResponse.data;
        const totalUsers = users.length;

        // Calculate new users (registered within the last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const newUsers = users.filter(user => new Date(user.createdAt) > oneWeekAgo).length;

        // Set the dashboard data
        setDashboardData({
          totalLoans,
          activeLoans,
          totalUsers,
          newUsers,
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar userRole="admin" />
      <div className="flex-1 bg-gray-100 p-4">
        <AdminNavbar />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h2 className="text-xl font-semibold text-gray-700">New Users (Last 7 Days)</h2>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.newUsers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
