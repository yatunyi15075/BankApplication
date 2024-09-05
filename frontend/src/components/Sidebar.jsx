import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaUser, FaEnvelope, FaDollarSign, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ userRole }) => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900 shadow-md">
        <h1 className="text-2xl font-bold">AppName</h1>
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
            >
              <FaHome className="mr-3 text-lg" />
              Dashboard
            </Link>
          </li>
          {userRole === 'admin' && (
            <>
              <li>
                <Link
                  to="/users"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaUser className="mr-3 text-lg" />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  to="/loans"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaTasks className="mr-3 text-lg" />
                  Loan Management
                </Link>
              </li>
              <li>
                <Link
                  to="/reports"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaChartBar className="mr-3 text-lg" />
                  Reports
                </Link>
              </li>
            </>
          )}
          {userRole === 'borrower' && (
            <>
              <li>
                <Link
                  to="/requests"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaEnvelope className="mr-3 text-lg" />
                  Support Requests
                </Link>
              </li>
              <li>
                <Link
                  to="/loans"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaDollarSign className="mr-3 text-lg" />
                  My Loans
                </Link>
              </li>
            </>
          )}
          {userRole === 'lender' && (
            <>
              <li>
                <Link
                  to="/investments"
                  className="flex items-center p-4 hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaDollarSign className="mr-3 text-lg" />
                  My Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/requests"
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
