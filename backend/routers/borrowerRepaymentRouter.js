import express from 'express';
import { createRepayment, getRepaymentHistory } from '../controllers/borrowerRepaymentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a repayment
router.post('/',authMiddleware, createRepayment);

// Route to get repayment history for a borrower
router.get('/:borrowerId',authMiddleware, getRepaymentHistory);
 
export default router;

