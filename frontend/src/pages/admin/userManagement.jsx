import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const updateUserRole = async (id, role) => {
        try {
            await axios.put(`/api/users/${id}/role`, { role });
            fetchUsers();
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    };

    const toggleUserActivation = async (id) => {
        try {
            await axios.put(`/api/users/${id}/activation`);
            fetchUsers();
        } catch (error) {
            console.error('Error toggling user activation:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
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
                    {/* {users.map((user) => (
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
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;
