import express from 'express';
import { getRepayments } from '../controllers/repaymentController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 


const router = express.Router();

router.get('/', authMiddleware, getRepayments);

export default router;
