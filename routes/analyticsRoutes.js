const express = require ('express')
const { getUsageAnalytics, getUserAnalytics } = require('../controllers/analyticsController.js');

const router = express.Router();

router.get('/usage', getUsageAnalytics);
router.get('/user/:userId', getUserAnalytics);

module.exports = router;