import express from 'express';
import { sendMessage, getChatHistory } from '../controllers/chatController.js';
import { authenticateToken } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/message',authenticateToken, sendMessage);
router.get('/history',authenticateToken, getChatHistory);

export default router;