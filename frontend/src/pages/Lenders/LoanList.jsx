import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LenderLoanList = () => {
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
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Browse Loans</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loans.map((loan) => (
                    <div key={loan.id} className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">Loan Amount: ${loan.amount}</h3>
                        <p className="mb-2">Interest Rate: {loan.interestRate}%</p>
                        <p className="mb-2">Term: {loan.term} months</p>
                        <p className="mb-2">Purpose: {loan.purpose}</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                            Fund Loan
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LenderLoanList;
