import express from 'express';
import { createRepayment, getRepaymentHistory } from '../controllers/borrowerRepaymentController.js';

const router = express.Router();

// Route to create a repayment
router.post('/', createRepayment);

// Route to get repayment history for a borrower
router.get('/:borrowerId', getRepaymentHistory);

export default router;
