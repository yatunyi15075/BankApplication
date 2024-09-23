import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUser, FaEnvelope, FaDollarSign, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ userRole, unreadCount }) => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold">AppName</h1>
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          {userRole === 'lender' && (
            <>
              <li>
                <Link
                  to="/lender/dashboard"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaHome className="mr-3 text-lg" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/investing-loan"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaDollarSign className="mr-3 text-lg" />
                  My Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/notifications"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200 relative"
                >
                  <FaEnvelope className="mr-3 text-lg" />
                  Notifications
                  {/* Show a badge with unread count */}
                  {unreadCount > 0 && (
                    <span className="absolute right-3 top-3 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                      {unreadCount}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/profile"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaUser className="mr-3 text-lg" />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/loan-list"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaTasks className="mr-3 text-lg" />
                  Loan List
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/repayment"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaChartBar className="mr-3 text-lg" />
                  Repayments
                </Link>
              </li>
              <li>
                <Link
                  to="/lender/support"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaEnvelope className="mr-3 text-lg" />
                  Support Requests
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
