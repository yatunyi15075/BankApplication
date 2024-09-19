import { Router } from 'express';
import { createLoan, getLoans, getLoanById } from '../controllers/borrowerLoanController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = Router();

router.post('/', authMiddleware, createLoan);
router.get('/', authMiddleware, getLoans); 
router.get('/:id', authMiddleware, getLoanById);

export default router;
