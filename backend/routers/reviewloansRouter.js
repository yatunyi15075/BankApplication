import express from 'express';
import { getAllLoans } from '../controllers/reviewloansController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

// Route to get all approved loans
router.get('/', authMiddleware, getAllLoans);

export default router;
