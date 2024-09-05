import express from 'express';
import { registerUser, updateUserProfile } from '../controllers/userController.js';

const router = express.Router();

// Register new user
router.post('/register', registerUser);

// Update user profile
router.put('/profile/:userId', updateUserProfile);

export default router;
