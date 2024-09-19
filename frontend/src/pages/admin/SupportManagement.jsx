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
        <AdminNavbar />
        <h1 className="text-2xl font-bold mb-4">Support Management</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supportRequests.map((request) => (
              <tr key={request._id}>
                <td className="py-2 px-4 border-b">{request._id}</td>
                <td className="py-2 px-4 border-b">{request.user.name}</td>
                <td className="py-2 px-4 border-b">{request.message}</td>
                <td className="py-2 px-4 border-b">{request.user.contact}</td>
                <td className="py-2 px-4 border-b">{request.status}</td>
                <td className="py-2 px-4 border-b">
                  {request.status !== 'Resolved' && (
                    <>
                      <button
                        className="bg-green-500 text-white py-1 px-4 rounded mr-2"
                        onClick={() => handleStatusChange(request._id, 'In Progress')}
                      >
                        In Progress
                      </button>
                      <button
                        className="bg-blue-500 text-white py-1 px-4 rounded"
                        onClick={() => handleStatusChange(request._id, 'Resolved')}
                      >
                        Resolve
                      </button>
                    </>
                  )}
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
