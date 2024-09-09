import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { useToast } from '@chakra-ui/react'; 

const InvestIngLoan = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loans, setLoans] = useState([]);
    const toast = useToast();

    // useEffect(() => {
    //     // Fetch loans for the lender to invest in
    //     const fetchLoans = async () => {
    //         try {
    //             const response = await axios.get('/api/loans');
    //             setLoans(response.data);
    //         } catch (error) {
    //             toast({
    //                 title: 'Error fetching loans',
    //                 description: error.message,
    //                 status: 'error',
    //                 duration: 5000,
    //                 isClosable: true,
    //             });
    //         }
    //     };
    //     fetchLoans();
    // }, [toast]);

    // const onSubmit = async (data) => {
    //     try {
    //         await axios.post('/api/invest/invest', data);
    //         toast({
    //             title: 'Investment successful',
    //             description: 'Your investment has been processed',
    //             status: 'success',
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //         reset();
    //     } catch (error) {
    //         toast({
    //             title: 'Investment failed',
    //             description: error.message,
    //             status: 'error',
    //             duration: 5000,
    //             isClosable: true,
    //         });
    //     }
    // };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Invest in Loans</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="loanId" className="block text-sm font-medium text-gray-700">Select Loan</label>
                    <select id="loanId" {...register('loanId')} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        {loans.map((loan) => (
                            <option key={loan.id} value={loan.id}>
                                {`Loan Amount: ${loan.amount}, Term: ${loan.term} months, Interest Rate: ${loan.interestRate}%`}
                            </option>
                        ))}
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
        </div>
    );
};

export default InvestIngLoan;
