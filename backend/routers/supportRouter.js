import express from 'express';
import { createSupportRequest, getSupportRequests, updateSupportRequest } 
from '../controllers/supportController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 


// import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', getSupportRequests);
router.patch('/:id',  updateSupportRequest);
router.post('/', createSupportRequest);

export default router;
