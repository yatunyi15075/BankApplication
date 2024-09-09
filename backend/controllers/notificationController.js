import Notification from '../models/notificationModel.js';

export const getNotifications = async (req, res) => {
    try {
        const lenderId = req.user.id;

        const notifications = await Notification.findAll({
            where: { lenderId },
            order: [['createdAt', 'DESC']],
        });

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch notifications.' });
    }
};
