import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const LoanManagement = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
      const response = await axios.get('http://localhost:5000/api/loans', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoans(response.data);
    } catch (error) {
      console.error('Error fetching loans:', error);
    }
  };
  

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/loans/${id}/approve`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchLoans();
    } catch (error) {
      console.error('Error approving loan:', error);
    }
  };
  
  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/loans/${id}/reject`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchLoans();
    } catch (error) {
      console.error('Error rejecting loan:', error);
    }
  };
  
  const handleMarkAsPaid = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/loans/${id}/markAsPaid`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchLoans();
    } catch (error) {
      console.error('Error marking loan as paid:', error);
    }
  };
  

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole="admin" />
      <div className="container mx-auto p-6">
        <AdminNavbar />
        <h1 className="text-2xl font-bold mb-4">Loan Management</h1>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Borrower ID</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Term</th>
              <th className="py-2 px-4 border-b">Interest Rate</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Repayment Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td className="py-2 px-4 border-b">{loan.borrowerId}</td>
                <td className="py-2 px-4 border-b">${loan.amount}</td>
                <td className="py-2 px-4 border-b">{loan.term} months</td>
                <td className="py-2 px-4 border-b">{loan.interestRate}%</td>

                <td className={`py-2 px-4 border-b 
                  ${loan.status === 'approved' ? 'text-green-500' 
                  : loan.status === 'rejected' ? 'text-red-500' : 'text-yellow-500'}`}>
                    {loan.status}</td>

                <td className={`py-2 px-4 border-b 
                ${loan.repaymentStatus === 'paid' ? 'text-green-500' 
                  : loan.repaymentStatus === 'overdue' ? 'text-red-500' : 'text-yellow-500'}`}>
                    {loan.repaymentStatus}</td>

                <td className="py-2 px-4 border-b flex space-x-2">
                  {loan.status === 'pending' && (
                    <>
                      <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleApprove(loan.id)}>Approve</button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleReject(loan.id)}>Reject</button>
                    </>
                  )}
                  {loan.repaymentStatus === 'overdue' && (
                    <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={() => handleMarkAsPaid(loan.id)}>Mark as Paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanManagement;
