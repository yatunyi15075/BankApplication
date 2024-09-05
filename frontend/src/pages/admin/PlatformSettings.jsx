// src/components/PlatformSettings.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlatformSettings = () => {
    const [settings, setSettings] = useState({
        interestRate: '',
        repaymentTerm: '',
        fees: '',
    });
    
    useEffect(() => {
        // Fetch current settings on component mount
        axios.get('/api/settings')
            .then(response => {
                setSettings(response.data);
            })
            .catch(error => console.error('Error fetching settings:', error));
    }, []);
    
    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('/api/settings', settings)
            .then(response => alert('Settings updated successfully'))
            .catch(error => console.error('Error updating settings:', error));
    };
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold mb-6">Platform Settings</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Interest Rate (%)</label>
                    <input
                        type="number"
                        name="interestRate"
                        value={settings.interestRate}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Repayment Term (Months)</label>
                    <input
                        type="number"
                        name="repaymentTerm"
                        value={settings.repaymentTerm}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Fees (%)</label>
                    <input
                        type="number"
                        name="fees"
                        value={settings.fees}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Save Settings
                </button>
            </form>
        </div>
    );
};

export default PlatformSettings;
