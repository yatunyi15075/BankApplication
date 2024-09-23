// src/routes/paymentRoutes.js
import express from 'express';
import { verifyPayment } from '../controllers/paymentController.js';

const router = express.Router();

// POST route for verifying payment
router.post('/verify-payment', verifyPayment);

export default router;
