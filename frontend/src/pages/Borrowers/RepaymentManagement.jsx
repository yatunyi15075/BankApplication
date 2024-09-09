import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { formatDate } from '../utils/dateUtils'; 

const RepaymentManagement = () => {
  const [repayments, setRepayments] = useState([]);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [loanId, setLoanId] = useState('');
  const [borrowerId, setBorrowerId] = useState(''); 

  useEffect(() => {
    fetchRepaymentHistory();
  }, []);

  const fetchRepaymentHistory = async () => {
    try {
      const response = await axios.get(`/api/repayments/${borrowerId}`);
      setRepayments(response.data);
    } catch (error) {
      console.error('Error fetching repayment history:', error);
    }
  };

  const handleRepaymentSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/repayments', { amount, date, loanId, borrowerId });
      fetchRepaymentHistory();
      setAmount('');
      setDate('');
      setLoanId('');
    } catch (error) {
      console.error('Error creating repayment:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Repayment Management</h2>

      <form onSubmit={handleRepaymentSubmit} className="mb-6 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Make a Repayment</h3>
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Submit Repayment
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-4">Repayment History</h3>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Loan ID</th>
            </tr>
          </thead>
          <tbody>
            {/* {repayments.map((repayment) => (
              <tr key={repayment.id}>
                <td className="py-2 px-4 border-b">{repayment.amount}</td>
                <td className="py-2 px-4 border-b">{formatDate(repayment.date)}</td>
                <td className="py-2 px-4 border-b">{repayment.loanId}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RepaymentManagement;
