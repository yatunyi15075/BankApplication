import React from 'react';
import Sidebar from '../Lenders/LenderSidebar';

const LenderDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userRole="lender" />
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Lender Dashboard</h1>
        
        {/* Dashboard Overview Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overview</h2>
          <p className="text-gray-600">
            Welcome to your Lender Dashboard. Here, you can manage your investments, view notifications, 
            and access your profile. Stay updated with your lending activities and monitor your portfolio performance.
          </p>
        </div>

        {/* Additional Content (Example: Stats, Notifications, Profile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Stats Card */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Total Investments</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">$10,000</p>
          </div>
          
          {/* Notifications Card */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">New Notifications</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">3</p>
          </div>
          
          {/* Profile Card */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">Your Profile</h3>
            <p className="text-gray-600 mt-2">View and edit your profile details, manage your account settings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LenderDashboard;
