// routes/reportRoutes.js
import express from 'express';
import { getReportData, createReportData } from '../controllers/loanReportController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/',authMiddleware , getReportData);
router.post('/',authMiddleware , createReportData);

export default router;


