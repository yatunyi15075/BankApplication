import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupportManagement = () => {
  const [supportRequests, setSupportRequests] = useState([]);

  useEffect(() => {
    const fetchSupportRequests = async () => {
      try {
        const response = await axios.get('/api/support');
        setSupportRequests(response.data);
      } catch (error) {
        console.error('Error fetching support requests', error);
      }
    };
    
    fetchSupportRequests();
  }, []);

  const handleResolve = async (id) => {
    try {
      await axios.patch(`/api/support/${id}`, { status: 'Resolved' });
      setSupportRequests(supportRequests.map(request =>
        request._id === id ? { ...request, status: 'Resolved' } : request
      ));
    } catch (error) {
      console.error('Error resolving support request', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Support Management</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">User</th>
            <th className="py-2 px-4 border-b">Message</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {supportRequests.map((request) => (
            <tr key={request._id}>
              <td className="py-2 px-4 border-b">{request._id}</td>
              <td className="py-2 px-4 border-b">{request.user}</td>
              <td className="py-2 px-4 border-b">{request.message}</td>
              <td className="py-2 px-4 border-b">{request.status}</td>
              <td className="py-2 px-4 border-b">
                {request.status !== 'Resolved' && (
                  <button
                    className="bg-blue-500 text-white py-1 px-4 rounded"
                    onClick={() => handleResolve(request._id)}
                  >
                    Resolve
                  </button>
                )}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default SupportManagement;
