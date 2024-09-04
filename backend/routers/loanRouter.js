import express from 'express';
import { getAllLoans, approveLoan, rejectLoan } from '../controllers/loanController.js';

const router = express.Router();

router.get('/loans', getAllLoans);
router.put('/loans/:id/approve', approveLoan);
router.put('/loans/:id/reject', rejectLoan);

export default router;
