import express from 'express';
import { getModelStatus, reloadModel } from '../controllers/modelController.js';

const router = express.Router();

router.get('/status', getModelStatus);
router.post('/reload', reloadModel);

export default router;