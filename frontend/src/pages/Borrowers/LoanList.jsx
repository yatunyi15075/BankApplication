import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage after login.

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/loans', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        
        if (Array.isArray(response.data)) {
          setLoans(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    fetchLoans();
  }, [token]);

  return (
    <div className="flex">
      <Sidebar userRole="borrower" />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Available Loans</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Term</th>
              <th className="py-2 px-4 border-b">Purpose</th>
              <th className="py-2 px-4 border-b">Interest Rate</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.length > 0 ? (
              loans.map((loan) => (
                <tr key={loan.id}>
                  <td className="py-2 px-4 border-b">{loan.amount}</td>
                  <td className="py-2 px-4 border-b">{loan.term}</td>
                  <td className="py-2 px-4 border-b">{loan.purpose}</td>
                  <td className="py-2 px-4 border-b">{loan.interestRate}%</td>
                  <td className="py-2 px-4 border-b">{loan.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 border-b text-center">
                  No loans available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanList;
