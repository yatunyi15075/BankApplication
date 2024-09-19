import express from 'express';
import { investInLoan, getLenderInvestments } from '../controllers/investmentController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

// // Authenticate all routes
// router.use(authenticate);

// Route to invest in a loan
router.post('/', authMiddleware, investInLoan);

// Route to get all investments for a lender
router.get('/', authMiddleware, getLenderInvestments);

export default router;
