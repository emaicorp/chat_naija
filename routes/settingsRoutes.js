const express = require ('express')
const  updateSettings  = require('../controllers/settingsController.js');

const router = express.Router();

router.post('/', updateSettings);

module.exports =router;