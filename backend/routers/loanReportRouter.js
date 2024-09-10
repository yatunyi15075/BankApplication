// routes/reportRoutes.js
import express from 'express';
import { getReportData, createReportData } from '../controllers/loanReportController.js';

const router = express.Router();

router.get('/', getReportData);
router.post('/', createReportData);

export default router;


