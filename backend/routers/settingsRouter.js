//admin
import express from 'express';
import { getSettings, updateSettings, createSettings, deleteSettings } 
from '../controllers/settingsController.js';
import authMiddleware from '../middleware/authMiddleware.js'; 

const router = express.Router();

router.get('/', authMiddleware, getSettings);
router.put('/', authMiddleware , updateSettings);
router.post('/', authMiddleware , createSettings);
router.delete('/:id', authMiddleware , deleteSettings);

export default router;
