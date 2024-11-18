const express = require ('express')
const { sendMessage, getChatHistory } = require('../controllers/chatController.js');
const { authenticateToken } = require('../utils/authMiddleware.js');

const router = express.Router();

router.post('/message',authenticateToken, sendMessage);
router.get('/history',authenticateToken, getChatHistory);

module.exports = router;