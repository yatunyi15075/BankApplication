import express from 'express';
import { createSupportRequest } from '../controllers/support.controller.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Assuming you have an authentication middleware

const router = express.Router();

router.post('/support', authMiddleware, createSupportRequest);

export default router;
