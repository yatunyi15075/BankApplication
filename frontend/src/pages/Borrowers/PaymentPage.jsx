import React, { useState } from 'react';
import PayPalButton from './PayPalButton';
import axios from 'axios';

const PaymentPage = () => {
  const [amount, setAmount] = useState(''); // Dynamic amount

  // Handle payment success
  const handleSuccess = async (paymentDetails) => {
    const token = localStorage.getItem('token');  // Retrieve the token inside the function
    console.log('Payment Success:', paymentDetails);

    // Save payment details to your backend or show success message
    try {
      await axios.post('/api/paypal/success', paymentDetails, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include Authorization header
        },
      });
      console.log('Payment details saved successfully');
    } catch (error) {
      console.error('Error saving payment details:', error);
    }
  };

  // Handle payment creation (backend API call)
  const handlePayment = async () => {
    const token = localStorage.getItem('token');  // Retrieve the token inside the function
    if (!amount) {
      alert('Please enter an amount');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/paypal/create-payment', { amount }, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include Authorization header
        },
      });
      window.location.href = response.data.links[1].href; // Redirect to PayPal payment page
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Pay with PayPal</h2>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Enter Amount (USD)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter amount"
          />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Pay Now
        </button>

        <div className="mt-4">
          <PayPalButton amount={amount} onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
