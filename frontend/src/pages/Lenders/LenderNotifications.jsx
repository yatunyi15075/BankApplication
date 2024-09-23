import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    const userId = 10; // Replace this with the appropriate dynamic user ID or fetch it from context/state.

    // Function to fetch notifications for a specific user
    const fetchNotifications = async () => {
        try {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            const response = await axios.get(
                `http://localhost:5000/api/borrower-notification/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setNotifications(response.data); // Set the notifications received from the server
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    // Function to mark a notification as read
    const markAsRead = async (notificationId) => {
        try {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            await axios.put(
                `http://localhost:5000/api/borrower-notification/${notificationId}`,
                { status: 'read' },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // After successfully marking as read, update the local state
            setNotifications((prevNotifications) =>
                prevNotifications.map((notification) =>
                    notification.id === notificationId
                        ? { ...notification, status: 'read' }
                        : notification
                )
            );
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    // Fetch notifications when the component mounts
    useEffect(() => {
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
                            <li
                                key={notification.id}
                                className={`mb-2 p-2 border border-gray-300 rounded-lg bg-gray-50 ${notification.status === 'read' ? 'text-gray-500' : ''}`}
                            >
                                <span className="font-semibold">{notification.message}</span>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">
                                        {new Date(notification.createdAt).toLocaleString()}
                                    </span>
                                    {notification.status !== 'read' && (
                                        <button
                                            onClick={() => markAsRead(notification.id)}
                                            className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
                                        >
                                            Mark as Read
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div> 
    );
};

export default LenderNotifications;
