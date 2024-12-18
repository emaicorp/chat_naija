const express = require ('express')
const { login, register, getAllUsers } = require('../controllers/authController.js');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/users', getAllUsers);

module.exports = router;