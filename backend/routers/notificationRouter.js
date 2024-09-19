import express from 'express';
import { getNotifications } from '../controllers/notificationController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/',authMiddleware, getNotifications);

export default router;
