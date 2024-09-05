import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupportRequests = () => {
  const [requestText, setRequestText] = useState('');
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('/api/support/requests');
        setRequests(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching support requests:', error);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/support/requests', { text: requestText });
      setRequestText('');
      setRequests([...requests, { text: requestText, status: 'Pending' }]);
    } catch (error) {
      console.error('Error submitting support request:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Support Requests</h1>
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
  );
};

export default SupportRequests;
