import express from 'express';
import { registerWebhook, testWebhook } from '../controllers/webhookController.js';

const router = express.Router();

router.post('/register', registerWebhook);
router.post('/test', testWebhook);

export default router;