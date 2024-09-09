// controllers/settingsController.js
import Setting from '../models/settingsModel.js';

export const getSettings = async (req, res) => {
    try {
        const settings = await Setting.findOne();
        if (settings) {
            res.json(settings);
        } else {
            res.status(404).json({ message: 'Settings not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const updateSettings = async (req, res) => {
    try {
        const { interestRate, repaymentTerm, fees } = req.body;
        let settings = await Setting.findOne();
        if (settings) {
            settings.interestRate = interestRate;
            settings.repaymentTerm = repaymentTerm;
            settings.fees = fees;
            await settings.save();
            res.json(settings);
        } else {
            // Create settings if they don't exist
            settings = await Setting.create({ interestRate, repaymentTerm, fees });
            res.status(201).json(settings);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
