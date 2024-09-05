import SupportRequest from '../models/support.model.js';

export const createSupportRequest = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id; // Assuming req.user contains the authenticated user
        const supportRequest = await SupportRequest.create({ userId, message });
        res.status(201).json(supportRequest);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create support request.' });
    }
};
