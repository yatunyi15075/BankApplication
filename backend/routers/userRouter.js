import { Router } from 'express';
import { getAllUsers, updateUserRole, toggleUserActivation } from '../controllers/userController.js';

const router = Router();

router.get('/users', getAllUsers); // Get all users
router.put('/users/:id/role', updateUserRole); // Update user role
router.put('/users/:id/activation', toggleUserActivation); // Toggle user activation status

export default router;
