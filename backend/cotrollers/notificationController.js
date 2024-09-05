import Notification from '../models/notification.model.js';

export const getNotifications = async (req, res) => {
    try {
        const lenderId = req.user.id; // Assuming req.user contains the authenticated user
        const notifications = await Notification.findAll({
            where: { lenderId },
            order: [['createdAt', 'DESC']],
        });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notifications.' });
    }
};
