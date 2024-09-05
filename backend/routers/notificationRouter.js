import express from 'express';
import { getNotifications } from '../controllers/notification.controller.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Assuming you have an authentication middleware

const router = express.Router();

router.get('/notifications', authMiddleware, getNotifications);

export default router;
