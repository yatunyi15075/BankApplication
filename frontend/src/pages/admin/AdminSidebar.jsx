import React from 'react';

const AdminSidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-700">Sitemark-web</h1>
      </div>
      <ul>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Home</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Analytics</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Clients</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Tasks</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Settings</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">About</li>
        <li className="p-4 text-gray-600 hover:bg-gray-200">Feedback</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
