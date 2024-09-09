import LenderProfile from '../models/lenderProfileModel.js';
import User from '../models/userModel.js';  // Assuming you have a User model

// Get lender profile by user ID
export const getLenderProfile = async (req, res) => {
    try {
        const profile = await LenderProfile.findOne({ where: { userId: req.user.id } });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update lender profile
export const updateLenderProfile = async (req, res) => {
    try {
        const { firstName, lastName, phone, address, bio } = req.body;

        const profile = await LenderProfile.findOne({ where: { userId: req.user.id } });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        profile.firstName = firstName || profile.firstName;
        profile.lastName = lastName || profile.lastName;
        profile.phone = phone || profile.phone;
        profile.address = address || profile.address;
        profile.bio = bio || profile.bio;

        await profile.save();
        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
