const express = require('express');
const { registerWebhook, testWebhook } = require('../controllers/webhookController.js'); // Use require for imports

const router = express.Router();

router.post('/register', registerWebhook);
router.post('/test', testWebhook);

module.exports = router; // Use module.exports instead of export default
