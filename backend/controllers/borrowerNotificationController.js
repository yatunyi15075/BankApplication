import Notification from '../models/borrowerNotificationModel.js';

// Create a new notification
// Create a new notification
export const createNotification = async (req, res) => {
  const { message, userId } = req.body;  // Get userId from the request body
  try {
    const notification = await Notification.create({ userId, message });
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error creating notification', error });
  }
};


// Get notifications for a user
export const getUserNotifications = async (req, res) => {
  const userId = req.user.id; // Use the user ID from the token, not params
  
  try {
    const notifications = await Notification.findAll({ where: { userId } });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notifications', error });
  }
};



// Update notification status
export const updateNotificationStatus = async (req, res) => {
  const { notificationId } = req.params;
  const { status } = req.body;
  try {
    const notification = await Notification.findByPk(notificationId);
    if (!notification) return res.status(404).json({ message: 'Notification not found' });

    notification.status = status;
    await notification.save();
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: 'Error updating notification', error });
  }
};
