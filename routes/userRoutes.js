const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser,
  userInfo,
} = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/info', userInfo);

module.exports = router;
