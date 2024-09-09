import { useState, useEffect } from 'react';
import axios from 'axios';

const LoanManagement = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const response = await axios.get('/api/loans');
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/loans/${id}/approve`);
      fetchLoans();
    } catch (error) {
      console.error('Error approving loan:', error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`/api/loans/${id}/reject`);
      fetchLoans();
    } catch (error) {
      console.error('Error rejecting loan:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Loan Management</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Borrower ID</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Term</th>
            <th className="py-2 px-4 border-b">Interest Rate</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="py-2 px-4 border-b">{loan.borrowerId}</td>
              <td className="py-2 px-4 border-b">${loan.amount}</td>
              <td className="py-2 px-4 border-b">{loan.term} months</td>
              <td className="py-2 px-4 border-b">{loan.interestRate}%</td>
              <td className={`py-2 px-4 border-b ${loan.status === 'approved' ? 'text-green-500' : loan.status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>{loan.status}</td>
              <td className="py-2 px-4 border-b flex space-x-2">
                {loan.status === 'pending' && (
                  <>
                    <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleApprove(loan.id)}>Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleReject(loan.id)}>Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default LoanManagement;
