import React from 'react';
import Sidebar from '../Lenders/LenderSidebar';

const LenderDashboard = () => {
  return (
    <div className="flex">
      <Sidebar userRole="lender" />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Lender Dashboard</h1>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="text-gray-700">Welcome to the Lender Dashboard. Here you can manage your investments, view notifications, and access your profile.</p>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
