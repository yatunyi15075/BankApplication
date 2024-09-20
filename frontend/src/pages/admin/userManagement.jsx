import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import Sidebar from './AdminSidebar';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token'); // Get token from localStorage (or sessionStorage)
            const response = await axios.get('http://localhost:5000/api/users', {
                headers: {
                    Authorization: `Bearer ${token}` // Add the token in the Authorization header
                }
            });
            console.log(response.data);  // Check if data is being fetched
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const updateUserRole = async (id, role) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/users/${id}/role`, { role }, { 
                headers: {
                    Authorization: `Bearer ${token}` // Add the token in the Authorization header
                }
            });
            fetchUsers();
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const toggleUserActivation = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(`http://localhost:5000/api/users/${id}/activation`, {}, {
                headers: {
                    Authorization: `Bearer ${token}` // Add the token in the Authorization header
                }
            });
            fetchUsers();
        } catch (error) {
            console.error('Error toggling user activation:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:5000/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Add the token in the Authorization header
                }
            });
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            <Sidebar userRole="admin" />
            <div className="container mx-auto p-4">
                <AdminNavbar />
                <h2 className="text-2xl font-semibold mb-4">User Management</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Name</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Role</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-4">{user.name}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">
                                    <select
                                        value={user.role}
                                        onChange={(e) => updateUserRole(user.id, e.target.value)}
                                        className="bg-gray-100 p-2 rounded"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="lender">Lender</option>
                                        <option value="borrower">Borrower</option>
                                    </select>
                                </td>
                                <td className="py-2 px-4">
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => toggleUserActivation(user.id)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        {user.isActive ? 'Deactivate' : 'Activate'}
                                    </button>
                                    <button
                                        onClick={() => deleteUser(user.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
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

export default UserManagement;
