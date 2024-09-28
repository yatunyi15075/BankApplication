import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';


const RepaymentManagement = () => {
  const [repayments, setRepayments] = useState([]);
  const [upcomingRepayments, setUpcomingRepayments] = useState([]);  // New state for upcoming repayments
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [loanId, setLoanId] = useState('');
  const [borrowerId, setBorrowerId] = useState(''); 
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRepaymentHistory();
    fetchUpcomingRepayments();
  }, []); 

  const fetchRepaymentHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/borrower-repayment/${borrowerId}`);
      setRepayments(response.data);
    } catch (error) {
      console.error('Error fetching repayment history:', error);
    }
  };

  const fetchUpcomingRepayments = async () => {  // Function to fetch upcoming repayments
    try {
      const response = await axios.get(`http://localhost:5000/api/loans/${borrowerId}/upcoming-repayments`);
      setUpcomingRepayments(response.data);
    } catch (error) {
      console.error('Error fetching upcoming repayments:', error);
    }
  };

  const handleRepaymentSubmit = async (e) => {
    e.preventDefault();
    if (amount <= 0) {
      setError('Repayment amount must be greater than zero');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/borrower-repayment', { amount, date, loanId, borrowerId });
      fetchRepaymentHistory();
      fetchUpcomingRepayments();
      setAmount('');
      setDate('');
      setLoanId('');
      setError('');
    } catch (error) {
      console.error('Error creating repayment:', error);
      setError('Failed to submit repayment. Please try again.');
    }
  };

  return (
    <div className="flex">
      <Sidebar userRole="borrower" />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Repayment Management</h2>

        <form onSubmit={handleRepaymentSubmit} className="mb-6 p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Make a Repayment</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="loanId" className="block text-gray-700">Loan ID</label>
            <input
              type="number"
              id="loanId"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit Repayment
            </button>
            {/* New Button on the same line */}
            <Link to="/pay-stack-payment" className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Another Action
          </Link>
          </div>
        </form>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Upcoming Repayment Schedule</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Due Date</th>
                <th className="py-2 px-4 border-b">Amount Due</th>
                <th className="py-2 px-4 border-b">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {upcomingRepayments.map((repayment) => (
                <tr key={repayment.id}>
                  <td className="py-2 px-4 border-b">{repayment.dueDate}</td>
                  <td className="py-2 px-4 border-b">{repayment.amountDue}</td>
                  <td className="py-2 px-4 border-b">{repayment.remainingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Repayment History</h3>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Loan ID</th>
                <th className="py-2 px-4 border-b">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {repayments.map((repayment) => (
                <tr key={repayment.id}>
                  <td className="py-2 px-4 border-b">{repayment.amount}</td>
                  <td className="py-2 px-4 border-b">{repayment.date}</td>
                  <td className="py-2 px-4 border-b">{repayment.loanId}</td>
                  <td className="py-2 px-4 border-b">{repayment.remainingBalance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RepaymentManagement;
