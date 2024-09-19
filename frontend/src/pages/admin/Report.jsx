import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const Report = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await axios.get('http://localhost:5000/api/loan-report', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the request headers
          },
        });
        setReportData(response.data);
      } catch (error) {
        console.error('Error fetching report data', error);
      }
    };

    fetchReportData();
  }, []);

  if (!reportData) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar userRole="admin" />
      <div className="flex-1 p-6">
        <AdminNavbar />
        <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Loan Report</h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Total Loans</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">{reportData.totalLoans}</p>
            </div>
            {/* Uncomment and style these when available */}
            {/* <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Total Funds</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">${reportData.totalFunds.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Total Repayments</h2>
              <p className="text-xl font-bold text-gray-900 mt-2">${reportData.totalRepayments.toFixed(2)}</p>
            </div> */}
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Active Loans</h2>
              <p className="text-xl font-bold text-green-600 mt-2">{reportData.activeLoans}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-700">Overdue Loans</h2>
              <p className="text-xl font-bold text-red-600 mt-2">{reportData.overdueLoans}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
