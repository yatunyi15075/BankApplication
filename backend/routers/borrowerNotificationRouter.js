import express from 'express';
import { createNotification, getUserNotifications, updateNotificationStatus }
 from '../controllers/borrowerNotificationController.js';

const router = express.Router();

router.post('/', createNotification);
router.get('/:userId', getUserNotifications);
router.put('/:notificationId', updateNotificationStatus);

export default router;
 