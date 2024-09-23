import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Lenders/LenderSidebar';

const LenderSupport = () => {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [faqs, setFaqs] = useState([
        { question: 'How do I track my repayments?', answer: 'You can track your repayments through the Repayment Management section.' },
        { question: 'How do I contact support?', answer: 'You can contact support by submitting a request through the form on this page.' },
        // Add more FAQs here as needed
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const token = localStorage.getItem('token');
            await axios.post('http://localhost:5000/api/support', {   message });
            setStatus('Your message has been sent successfully.');
            setMessage('');
        } catch (error) {
            setStatus('Failed to send your message. Please try again.');
        }
    };

    return (
        <div className="flex">
            <Sidebar userRole="lender" />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Support</h2>
                
                {/* Help Center Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Help Center</h3>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-2">Frequently Asked Questions</h4>
                        <ul>
                            {faqs.map((faq, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-semibold">{faq.question}</p>
                                    <p className="text-gray-700">{faq.answer}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Support Request Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Submit a Support Request</h3>
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
        </div>
    );
};

export default LenderSupport;
