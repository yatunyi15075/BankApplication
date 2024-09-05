import express from 'express';
import { createNotification, getUserNotifications, updateNotificationStatus } from '../controllers/notificationController.js';

const router = express.Router();

router.post('/notifications', createNotification);
router.get('/notifications/:userId', getUserNotifications);
router.put('/notifications/:notificationId', updateNotificationStatus);

export default router;
