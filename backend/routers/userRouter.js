import { Router } from 'express';
import { getAllUsers, 
    updateUserRole, 
    toggleUserActivation, 
    registerUser, 
    loginUser, 
    updateUserProfile, 
    getUserProfile,
    deleteUser } 
    from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = Router();

router.get('/',authMiddleware, getAllUsers); 
router.put('/:id/role', authMiddleware, updateUserRole); // Update user role
router.put('/:id/activation',authMiddleware , toggleUserActivation);
router.delete('/:id', authMiddleware, deleteUser);


// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get logged-in user's profile
router.get('/profile', authMiddleware , getUserProfile);

// Update user profile
router.put('/profile', authMiddleware , updateUserProfile); // Use authentication for updating profile

export default router;
