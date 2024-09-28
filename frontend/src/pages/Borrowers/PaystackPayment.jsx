// src/components/PaystackPayment.jsx
import { useState } from 'react';
import axios from 'axios';

const PaystackPayment = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('USD'); // Default currency set to USD

  const handlePaystackPayment = async () => {
    const publicKey = 'your_paystack_public_key'; // Replace with your Paystack public key
    const paymentHandler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100, // Paystack expects amount in the smallest currency unit (e.g., cents for USD)
      currency: currency,    // Use selected currency
      callback: (response) => {
        console.log('Payment successful!', response);
        verifyPayment(response.reference); // Call backend to verify payment
      },
      onClose: () => {
        console.log('Payment cancelled');
      },
    });
    paymentHandler.openIframe();
  };

  const verifyPayment = async (reference) => {
    try {
      const response = await axios.post('http://localhost:5000/api/verify-payment', { reference });
      console.log('Payment verification response:', response.data);
    } catch (error) {
      console.error('Error verifying payment:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Pay with Paystack</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:ring-2 
          focus:ring-blue-400 focus:outline-none"
          placeholder="Enter your email"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 
          focus:ring-blue-400 focus:outline-none"
          placeholder="Enter amount"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:ring-2 
          focus:ring-blue-400 focus:outline-none"
        >
          <option value="USD">USD</option>
          <option value="NGN">NGN (Naira)</option>
          <option value="GHS">GHS (Cedi)</option>
          <option value="KES">KES (Shilling)</option>
          <option value="ZAR">ZAR (Rand)</option>
        </select>
        <button
          onClick={handlePaystackPayment}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 
          rounded-md transition duration-300"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaystackPayment;
