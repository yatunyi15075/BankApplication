import express from 'express';
import { getAllRequests, createRequest } from '../controllers/supportController.js';

const router = express.Router();

router.get('/requests', getAllRequests);
router.post('/requests', createRequest);

export default router;
