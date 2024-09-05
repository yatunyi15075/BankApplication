import express from 'express';
import { getRepayments } from '../controllers/repayment.controller.js';
import authMiddleware from '../middleware/authMiddleware.js'; // Assuming you have an authentication middleware

const router = express.Router();

router.get('/repayments', authMiddleware, getRepayments);

export default router;
