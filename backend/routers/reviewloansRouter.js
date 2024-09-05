import express from 'express';
import { getAllLoans } from '../controllers/loan.controller.js';

const router = express.Router();

// Route to get all approved loans
router.get('/loans', getAllLoans);

export default router;
