import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const SupportRequests = () => {
  const [requestText, setRequestText] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/support/requests');
        setRequests(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching support requests:', error);
        setLoading(false);
      }
    };

    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/support/faqs');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchRequests();
    fetchFaqs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/support', { text: requestText });
      setRequestText('');
      setRequests([...requests, { text: requestText, status: 'Pending' }]);
    } catch (error) {
      console.error('Error submitting support request:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar userRole="borrower" />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Support Requests</h1>

        {/* Help Center Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Help Center</h2>
          <div className="border border-gray-300 rounded-lg p-4">
            <h3 className="font-semibold">Frequently Asked Questions</h3>
            <ul className="list-disc pl-5">
              {faqs.map((faq, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{faq.question}</p>
                  <p>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Submit Request Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Describe your issue..."
            required
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit Request
          </button>
        </form>

        {/* Display Submitted Requests */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-disc pl-5">
            {requests.map((request, index) => (
              <li key={index} className="mb-2">
                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="font-semibold">Request:</p>
                  <p>{request.text}</p>
                  <p className="mt-2 text-sm text-gray-600">Status: {request.status}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SupportRequests;
