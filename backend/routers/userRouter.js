import { Router } from 'express';
import { getAllUsers, updateUserRole, toggleUserActivation, registerUser, loginUser, updateUserProfile, getUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = Router();

router.get('/', getAllUsers); 
router.put('/:id/role', updateUserRole); // Update user role
router.put('/:id/activation', toggleUserActivation); // Toggle user activation status

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get logged-in user's profile
router.get('/profile', authMiddleware , getUserProfile);

// Update user profile
router.put('/profile', authMiddleware , updateUserProfile); // Use authentication for updating profile

export default router;
