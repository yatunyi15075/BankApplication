// routes/reportRoutes.js
import express from 'express';
import { getReportData } from '../controllers/loanReportController.js';

const router = express.Router();

router.get('/', getReportData);

export default router;


