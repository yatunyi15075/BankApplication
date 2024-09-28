import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';
import ReCAPTCHA from 'react-google-recaptcha';

const LoanRequestForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    purpose: '',
    interestRate: '',
    repaymentSchedule: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null); // Store reCAPTCHA token

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle reCAPTCHA verification
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token); // Set reCAPTCHA token
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    const token = localStorage.getItem('token'); // Retrieve token from local storage

    try {
      await axios.post(
        'http://localhost:5000/api/borrower-loan',
        {
          ...formData,
          recaptchaToken, // Include reCAPTCHA token in the request
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to request headers
          }
        }
      );
      alert('Loan request submitted successfully!');
    } catch (error) {
      console.error('Error submitting loan request:', error);
      alert('Failed to submit loan request.');
    }
  };

  return (
    <div className="flex">
      <Sidebar userRole="borrower" />
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Request a Loan</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Term (in months)</label>
            <input
              type="number"
              name="term"
              value={formData.term}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Purpose</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Interest Rate (%)</label>
            <input
              type="number"
              name="interestRate"
              value={formData.interestRate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Repayment Schedule (e.g., monthly)</label>
            <input
              type="text"
              name="repaymentSchedule"
              value={formData.repaymentSchedule}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Google reCAPTCHA */}
          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6Lfv-EUqAAAAAMcr7_ho-rP8CO9Wn7AdV6KIQLVI"
              onChange={handleRecaptcha}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequestForm;
