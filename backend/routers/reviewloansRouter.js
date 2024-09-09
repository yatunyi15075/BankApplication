import express from 'express';
import { getAllLoans } from '../controllers/reviewloansController.js';

const router = express.Router();

// Route to get all approved loans
router.get('/', getAllLoans);

export default router;
