import { Router } from 'express';
import { createLoan, getLoans, getLoanById } from '../controllers/borrowerLoanController.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Import middleware

const router = Router();

router.post('/', authMiddleware, createLoan); // Protect route with authentication
router.get('/', authMiddleware, getLoans);    // Protect route
router.get('/:id', authMiddleware, getLoanById);  // Protect route

export default router;
