import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('/api/loans');
        setLoans(response.data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    fetchLoans();
  }, []);

  return (
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
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td className="py-2 px-4 border-b">{loan.amount}</td>
              <td className="py-2 px-4 border-b">{loan.term}</td>
              <td className="py-2 px-4 border-b">{loan.purpose}</td>
              <td className="py-2 px-4 border-b">{loan.interestRate}%</td>
              <td className="py-2 px-4 border-b">{loan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoanList;
