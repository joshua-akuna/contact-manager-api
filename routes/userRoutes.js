const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  userInfo,
} = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/info', verifyToken, userInfo);

module.exports = router;
