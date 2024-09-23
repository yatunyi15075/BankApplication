import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUser, FaChartBar, FaCog, FaHeadset, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ userRole }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile hamburger menu button */}
      <div className="md:hidden bg-gray-900 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">AppName</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 min-h-screen md:static md:block fixed top-0 ${
          isOpen ? 'left-0' : '-left-64'
        } transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
          <h1 className="text-2xl font-bold">AppName</h1>
        </div>
        <nav className="flex-1 mt-6">
          <ul>
            {userRole === 'admin' && (
              <>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaHome className="mr-3 text-lg" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/user-management"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaUser className="mr-3 text-lg" />
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/loan-management"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaTasks className="mr-3 text-lg" />
                    Loan Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/report"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaChartBar className="mr-3 text-lg" />
                    Reports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/notifications"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaChartBar className="mr-3 text-lg" />
                    Submit Notifications
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/platform-settings"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaCog className="mr-3 text-lg" />
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/support-management"
                    className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <FaHeadset className="mr-3 text-lg" />
                    Support
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Overlay when sidebar is open in mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
