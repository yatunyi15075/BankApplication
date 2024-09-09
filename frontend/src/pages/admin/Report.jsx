// components/Report.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const Report = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reports');
        setReportData(response.data);
      } catch (error) {
        console.error('Error fetching report data', error);
      }
    };

    fetchReportData();
  }, []);

  if (!reportData) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen"> 
      <Sidebar userRole="admin" />
    <div className="p-6 bg-white rounded-lg shadow-md">
    <AdminNavbar />
      <h1 className="text-xl font-bold mb-4">Loan Report</h1>
      <ul className="list-disc pl-5">
        <li>Total Loans: {reportData.totalLoans}</li>
        <li>Total Funds:</li>
        <li>Total Repayments: </li>
{/* 
        <li>Total Funds: ${reportData.totalFunds.toFixed(2)}</li>
        <li>Total Repayments: ${reportData.totalRepayments.toFixed(2)}</li> */}
        <li>Active Loans: {reportData.activeLoans}</li>
        <li>Overdue Loans: {reportData.overdueLoans}</li>
      </ul>
    </div>
    </div >
  );
};

export default Report;
