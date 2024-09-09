//loan management of admin

import express from 'express';
import { getAllLoans, approveLoan, rejectLoan } from '../controllers/loanController.js';

const router = express.Router();

router.get('/', getAllLoans);
router.put('/:id/approve', approveLoan);
router.put('/:id/reject', rejectLoan);

export default router;
