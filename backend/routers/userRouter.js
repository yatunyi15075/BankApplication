//has login/register and also user management codes

import { Router } from 'express';
import { getAllUsers, updateUserRole, toggleUserActivation, registerUser, loginUser, updateUserProfile }
 from '../controllers/userController.js';

const router = Router();

router.get('/', getAllUsers); 
router.put('/:id/role', updateUserRole); // Update user role
router.put('/:id/activation', toggleUserActivation); // Toggle user activation status

// Register new user
router.post('/register', registerUser);

router.post('/login', loginUser);
 

// Update user profile
router.put('/profile/:userId', updateUserProfile); 

export default router;
 