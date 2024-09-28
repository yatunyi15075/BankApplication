import React from 'react';
import Navbar from '../../components/Navbar'; 
import Sidebar from '../Borrowers/BorrowerSidebar';

const BorrowerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar userRole="borrower" />
      <div className="flex-1 p-6">
        <Navbar />
        <h1 className="text-3xl font-bold mb-4">Borrower Dashboard</h1>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-700">
            Welcome to the Borrower Dashboard. Here you can manage your loan requests, 
            view notifications, and access your profile.</p>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboard;
