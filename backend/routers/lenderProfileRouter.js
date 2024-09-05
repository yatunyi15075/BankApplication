import express from 'express';
import { getLenderProfile, updateLenderProfile } from '../controllers/lenderProfileController.js';
import authMiddleware from '../middleware/authMiddleware.js';  // Assuming you have an auth middleware

const router = express.Router();

// Get profile
router.get('/profile', authMiddleware, getLenderProfile);

// Update profile
router.put('/profile', authMiddleware, updateLenderProfile);

export default router;
