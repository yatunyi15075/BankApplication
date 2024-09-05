import { Router } from 'express';
import { createLoan, getLoans, getLoanById } from '../controllers/loanController.js';

const router = Router();

router.post('/loans', createLoan);
router.get('/loans', getLoans);
router.get('/loans/:id', getLoanById);

export default router;
