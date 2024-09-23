import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const AdminNotifications  = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Get token from localStorage (or sessionStorage)
            const response = await axios.get('http://localhost:5000/api/users', {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const sendNotification = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          await axios.post('http://localhost:5000/api/borrower-notification', 
          {
              userId: selectedUser, 
              message: message
          },
          {
              headers: {
                  Authorization: `Bearer ${token}` 
              }
          });
          setMessage('');
          setSelectedUser('');
          alert('Notification sent successfully!');
        } catch (error) {
          console.error('Error sending notification:', error);
        }
      };
      
    

    return (
        <div className="flex min-h-screen">
            <Sidebar userRole="admin" />
            <div className="flex-1 p-6 bg-white shadow-md rounded overflow-y-auto">
                <AdminNavbar />
            <h2 className="text-xl font-semibold mb-4">Send Notification</h2>
            <form onSubmit={sendNotification}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Select User</label>
                    <select
                        value={selectedUser}
                        onChange={(e) => setSelectedUser(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    >
                        <option value="" disabled>Select a user</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Notification Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                >
                    Send Notification
                </button>
            </form>
        </div>
        </div>
    );
};

export default AdminNotifications ;
