import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Lenders/LenderSidebar';

const InvestingLoan = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loans, setLoans] = useState([]);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        const response = await axios.get('http://localhost:5000/api/loans', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoans(response.data);
      } catch (error) {
        toast.error(`Error fetching loans: ${error.message}`);
      }
    };
    fetchLoans();
  }, []);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/investment', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setInvestments(response.data);
      } catch (error) {
        toast.error(`Error fetching investments: ${error.message}`);
      }
    };
    fetchInvestments();
  }, []);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/investment', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Investment successful! Your investment has been processed.');
      reset();
    } catch (error) {
      toast.error(`Investment failed: ${error.message}`);
    }
  };

  return (
    <div className="flex">
      <Sidebar userRole="lender" />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Invest in Loans</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="loanId" className="block text-sm font-medium text-gray-700">Select Loan</label>
            <select id="loanId" {...register('loanId')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
              {Array.isArray(loans) && loans.length > 0 ? (
                loans.map((loan) => (
                  <option key={loan.id} value={loan.id}>
                    {`Loan Amount: ${loan.amount}, Term: ${loan.term} months, Interest Rate: ${loan.interestRate}%`}
                  </option>
                ))
              ) : (
                <option value="" disabled>No loans available</option>
              )}
            </select>
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Investment Amount</label>
            <input
              id="amount"
              type="number"
              {...register('amount', { required: true })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Invest</button>
        </form>
        <h2 className="text-xl font-bold mt-8">Your Investments</h2>
        <table className="min-w-full bg-white border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Loan ID</th>
              <th className="py-2 px-4 border-b">Amount Invested</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Repayment Progress</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(investments) && investments.length > 0 ? (
              investments.map((investment) => (
                <tr key={investment.id}>
                  <td className="py-2 px-4 border-b">{investment.loanId}</td>
                  <td className="py-2 px-4 border-b">${investment.amount}</td>
                  <td className="py-2 px-4 border-b">{investment.status}</td>
                  <td className="py-2 px-4 border-b">{investment.repaymentProgress}%</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 border-b" colSpan="4">No investments found</td>
              </tr>
            )}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
};

export default InvestingLoan;
