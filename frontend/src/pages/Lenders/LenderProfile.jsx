import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';  // Assuming you're using React Toastify for notifications
import Sidebar from '../Lenders/LenderSidebar';

const LenderProfile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        bio: ''
    });

    useEffect(() => {
        // Fetch lender profile
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/lender-profile');
                setProfile(response.data);
            } catch (error) {
                toast.error('Failed to load profile');
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:5000/api/lender-profile', profile);
            toast.success('Profile updated successfully');
            setProfile(response.data);
        } catch (error) {
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            style={{ width: '100%' }} // Increase width
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            style={{ width: '100%' }} // Increase width
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            style={{ width: '100%' }} // Increase width
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={profile.address}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            style={{ width: '100%' }} // Increase width
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            style={{ width: '100%' }} // Increase width
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LenderProfile;
