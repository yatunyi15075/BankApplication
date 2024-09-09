import { Router } from 'express';
import { createLoan, getLoans, getLoanById } from '../controllers/borrowerLoanController.js';

const router = Router();

router.post('/', createLoan);
router.get('/', getLoans);
router.get('/:id', getLoanById);

export default router;
