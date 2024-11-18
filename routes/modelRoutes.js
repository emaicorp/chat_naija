const express = require ('express')
const { getModelStatus, reloadModel } = require ('../controllers/modelController.js');

const router = express.Router();

router.get('/status', getModelStatus);
router.post('/reload', reloadModel);

module.exports = router;