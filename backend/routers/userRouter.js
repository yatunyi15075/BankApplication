import { Router } from 'express';
import { getAllUsers, updateUserRole, toggleUserActivation, registerUser, loginUser, updateUserProfile }
 from '../controllers/userController.js';

const router = Router();

router.get('/users', getAllUsers); // Get all users
router.put('/users/:id/role', updateUserRole); // Update user role
router.put('/users/:id/activation', toggleUserActivation); // Toggle user activation status

// Register new user
router.post('/register', registerUser);

router.post('/login', loginUser);


// Update user profile
router.put('/profile/:userId', updateUserProfile);

export default router;
