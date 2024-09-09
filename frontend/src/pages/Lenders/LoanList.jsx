import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar'

const LenderLoanList = () => {
    const [loans, setLoans] = useState([]);
    const [filteredLoans, setFilteredLoans] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTerm, setSelectedTerm] = useState(''); // For filtering by term
    const [riskLevel, setRiskLevel] = useState(''); // For filtering by risk level

    useEffect(() => {
        const fetchLoans = async () => {
            try {
                const response = await axios.get('/api/loans');
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
            <div className="container mx-auto py-6">
                <h2 className="text-2xl font-semibold text-center mb-6">Browse Loans</h2>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by amount"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                    />
                    <select
                        value={selectedTerm}
                        onChange={(e) => setSelectedTerm(e.target.value)}
                        className="ml-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Terms</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        {/* Add more term options as needed */}
                    </select>
                    <select
                        value={riskLevel}
                        onChange={(e) => setRiskLevel(e.target.value)}
                        className="ml-4 p-2 border border-gray-300 rounded"
                    >
                        <option value="">All Risk Levels</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        {/* Add more risk levels as needed */}
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* {filteredLoans.map((loan) => (
                        <div key={loan.id} className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2">Loan Amount: ${loan.amount}</h3>
                            <p className="mb-2">Interest Rate: {loan.interestRate}%</p>
                            <p className="mb-2">Term: {loan.term} months</p>
                            <p className="mb-2">Purpose: {loan.purpose}</p>
                            <p className="mb-2">Borrower: {loan.borrowerName}</p>
                            <p className="mb-2">Risk Level: {loan.riskLevel}</p>
                            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                                Fund Loan
                            </button>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default LenderLoanList;
