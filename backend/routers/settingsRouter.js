// routers/settingsRouter.js
//admin
import express from 'express';
import { getSettings, updateSettings, createSettings, deleteSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.get('/', getSettings);
router.put('/', updateSettings);
router.post('/', createSettings);
router.delete('/:id', deleteSettings);

export default router;
