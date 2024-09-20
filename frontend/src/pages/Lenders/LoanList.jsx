import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderLoanList = () => {
    const [loans, setLoans] = useState([]);
    const [filteredLoans, setFilteredLoans] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTerm, setSelectedTerm] = useState('');
    const [riskLevel, setRiskLevel] = useState('');

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token
                const response = await axios.get('http://localhost:5000/api/loans', {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token
                    }
                });
                setLoans(response.data);
                setFilteredLoans(response.data);
            } catch (error) {
                console.error('Error fetching loans:', error);
            }
        };

        fetchLoans();
    }, []);

    useEffect(() => {
        const filterLoans = () => {
            let filtered = loans.filter(loan => 
                loan.amount.toString().includes(searchTerm) &&
                (selectedTerm === '' || loan.term === selectedTerm) &&
                (riskLevel === '' || loan.riskLevel === riskLevel)
            );
            setFilteredLoans(filtered);
        };

        filterLoans();
    }, [searchTerm, selectedTerm, riskLevel, loans]);

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Browse Loans</h2>
                <div className="mb-6 flex justify-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search by amount"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <select
                        value={selectedTerm}
                        onChange={(e) => setSelectedTerm(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="">All Terms</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                    </select>
                    <select
                        value={riskLevel}
                        onChange={(e) => setRiskLevel(e.target.value)}
                        className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 transition"
                    >
                        <option value="">All Risk Levels</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredLoans.map((loan) => (
                        <div key={loan.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Loan Amount: ${loan.amount}</h3>
                            <p className="mb-2">Interest Rate: {loan.interestRate}%</p>
                            <p className="mb-2">Term: {loan.term} months</p>
                            <p className="mb-2">Purpose: {loan.purpose}</p>
                            <p className="mb-2">Borrower: {loan.borrowerName}</p>
                            <p className="mb-2">Risk Level: <span className={`font-bold ${loan.riskLevel === 'High' ? 'text-red-600' : loan.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>{loan.riskLevel}</span></p>
                            <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out">
                                Fund Loan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LenderLoanList;
