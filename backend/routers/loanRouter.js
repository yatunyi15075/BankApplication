import express from 'express';
import { getAllLoans, approveLoan, rejectLoan, createLoanRequest } from '../controllers/loanController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/',authMiddleware, getAllLoans);
router.put('/:id/approve',authMiddleware, approveLoan);
router.put('/:id/reject',authMiddleware, rejectLoan);

// Borrower route (newly added)
router.post('/',authMiddleware, createLoanRequest);

export default router;
 