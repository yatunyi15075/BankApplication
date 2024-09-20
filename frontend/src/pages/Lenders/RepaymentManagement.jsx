import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderRepaymentManagement = () => {
    const [repayments, setRepayments] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchRepayments = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
                const response = await axios.get('http://localhost:5000/api/repayments', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token in the header
                    },
                });
                setRepayments(response.data);
            } catch (error) {
                console.error('Error fetching repayments:', error);
            }
        };
    
        const fetchTransactions = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/transactions', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Pass the token in the header
                    },
                });
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
    
        fetchRepayments();
        fetchTransactions();
    }, []);
    

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Repayment Management</h2>
                {repayments.length === 0 ? (
                    <p>No repayments found.</p>
                ) : (
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Loan ID</th>
                                <th className="py-2 px-4 border-b">Borrower</th>
                                <th className="py-2 px-4 border-b">Amount Repaid</th>
                                <th className="py-2 px-4 border-b">Repayment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repayments.map((repayment) => (
                                <tr key={repayment.id}>
                                    <td className="py-2 px-4 border-b">{repayment.loanId}</td>
                                    <td className="py-2 px-4 border-b">{repayment.borrowerName}</td>
                                    <td className="py-2 px-4 border-b">{repayment.amount}</td>
                                    <td className="py-2 px-4 border-b">{new Date(repayment.repaymentDate).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                <h2 className="text-2xl font-bold mt-8 mb-4">Transaction History</h2>
                {transactions.length === 0 ? (
                    <p>No transactions found.</p>
                ) : (
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Transaction ID</th>
                                <th className="py-2 px-4 border-b">Type</th>
                                <th className="py-2 px-4 border-b">Amount</th>
                                <th className="py-2 px-4 border-b">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className="py-2 px-4 border-b">{transaction.id}</td>
                                    <td className="py-2 px-4 border-b">{transaction.type}</td>
                                    <td className="py-2 px-4 border-b">{transaction.amount}</td>
                                    <td className="py-2 px-4 border-b">{new Date(transaction.date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default LenderRepaymentManagement;
