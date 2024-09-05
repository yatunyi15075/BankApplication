import express from 'express';
import { createRepayment, getRepaymentHistory } from '../controllers/repaymentController.js';

const router = express.Router();

// Route to create a repayment
router.post('/repayments', createRepayment);

// Route to get repayment history for a borrower
router.get('/repayments/:borrowerId', getRepaymentHistory);

export default router;
