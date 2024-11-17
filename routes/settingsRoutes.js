import express from 'express';
import { updateSettings } from '../controllers/settingsController.js';

const router = express.Router();

router.post('/', updateSettings);

export default router;