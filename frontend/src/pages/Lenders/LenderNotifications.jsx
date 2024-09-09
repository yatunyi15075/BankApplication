import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar'

const LenderNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications for the logged-in lender
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/notifications');
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };
        fetchNotifications();
    }, []);

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Notifications</h2>
                {notifications.length === 0 ? (
                    <p>No notifications available.</p>
                ) : (
                    <ul className="list-disc pl-5">
                        {notifications.map((notification) => (
                            <li key={notification.id} className="mb-2 p-2 border border-gray-300 rounded-lg bg-gray-50">
                                <span className="font-semibold">{notification.title}</span>
                                <p>{notification.message}</p>
                                <span className="text-sm text-gray-500">
                                    {new Date(notification.createdAt).toLocaleString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LenderNotifications;
