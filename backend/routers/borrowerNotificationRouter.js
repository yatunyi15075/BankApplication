import express from 'express';
import { createNotification, getUserNotifications, updateNotificationStatus }
 from '../controllers/borrowerNotificationController.js';
 import authMiddleware from '../middleware/authMiddleware.js'; 


const router = express.Router();

router.post('/', authMiddleware, createNotification);
router.get('/:userId', authMiddleware , getUserNotifications);
router.put('/:notificationId', authMiddleware , updateNotificationStatus);

export default router;
