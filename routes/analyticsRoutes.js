import express from 'express';
import { getUsageAnalytics, getUserAnalytics } from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/usage', getUsageAnalytics);
router.get('/user/:userId', getUserAnalytics);

export default router;