import express from 'express';
import { createSupportRequest, getSupportRequests, updateSupportRequest } 
from '../controllers/supportController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 


// import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', authMiddleware, getSupportRequests);
router.patch('/:id', authMiddleware , updateSupportRequest);
router.post('/', authMiddleware , createSupportRequest);

export default router;
