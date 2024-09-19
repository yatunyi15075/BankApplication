import express from 'express';
import { getLenderProfile, updateLenderProfile } from '../controllers/lenderProfileController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

// Get profile
router.get('/', authMiddleware, getLenderProfile);

// Update profile
router.put('/',authMiddleware, updateLenderProfile);

export default router;
