import React, { useState } from 'react';
import axios from 'axios';

const LenderSupport = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/support', { message });
            setStatus('Your message has been sent successfully.');
            setMessage('');
        } catch (error) {
            setStatus('Failed to send your message. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Support</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                >
                    Send Message
                </button>
                {status && <p className="mt-4 text-sm">{status}</p>}
            </form>
        </div>
    );
};

export default LenderSupport;
