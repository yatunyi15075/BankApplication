//loan management of admin

import express from 'express';
import { getAllLoans, approveLoan, rejectLoan, createLoanRequest } from '../controllers/loanController.js';

const router = express.Router();

router.get('/', getAllLoans);
router.put('/:id/approve', approveLoan);
router.put('/:id/reject', rejectLoan);

// Borrower route (newly added)
router.post('/', createLoanRequest);

export default router;
 