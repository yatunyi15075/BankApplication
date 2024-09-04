import express from 'express';
import { getSupportRequests, updateSupportRequest } from '../controllers/supportController.js';

const router = express.Router();

router.get('/', getSupportRequests);
router.patch('/:id', updateSupportRequest);

export default router;
