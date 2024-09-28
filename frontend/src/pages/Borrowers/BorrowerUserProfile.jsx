import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Borrowers/BorrowerSidebar';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/users/profile', user, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error updating profile');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User data not found</div>;

    return (
        <div className="flex">
            <Sidebar userRole="borrower" />
            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={user.name || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email || ''}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white 
                        font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
