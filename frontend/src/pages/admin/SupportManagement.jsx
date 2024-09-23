import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const SupportManagement = () => {
  const [supportRequests, setSupportRequests] = useState([]);

  useEffect(() => {
    const fetchSupportRequests = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        const response = await axios.get('http://localhost:5000/api/support', {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the request headers
          },
        });
        setSupportRequests(response.data);
      } catch (error) {
        console.error('Error fetching support requests', error);
      }
    };
    fetchSupportRequests();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      await axios.patch(`http://localhost:5000/api/support/${id}`, { status }, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the request headers
        },
      });
      setSupportRequests(supportRequests.map(request =>
        request._id === id ? { ...request, status } : request
      ));
    } catch (error) {
      console.error('Error updating support request status', error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole="admin" />
      <div className="flex-1 p-6 overflow-y-auto"> {/* Adjusted to take full width */}
        <h1 className="text-2xl font-bold mb-4">Support Requests</h1>
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supportRequests.map((request, index) => (
              <tr key={index}>
                {/* Adding a check to make sure 'request' and 'request.name' are defined */}
                <td className="border px-4 py-2">{request.name ? request.name : 'No Name Available'}</td>
                <td className="border px-4 py-2">{request.email ? request.email : 'No Email Available'}</td>
                <td className="border px-4 py-2">
                  {request.status}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleStatusChange(request._id, 'resolved')}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Mark as Resolved
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportManagement;
