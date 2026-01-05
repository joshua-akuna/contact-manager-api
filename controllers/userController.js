const asyncHandler = require('express-async-handler');
const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

//@desc Register a new user
//@route POST /api/v1/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields are required.');
  }
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error('Username already exists. Please login.');
  }
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(400);
    throw new Error('Email already registered. Please login.');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.status(201).json(user);
});

//@desc Login existing user
//@route POST /api/v1/users/login
//@access public
const loginUser = (req, res) => {
  res.status(200).json({ message: 'User logged in' });
};

//@desc returns user information
//@route GET /api/v1/users/info
//@access private
const userInfo = (req, res) => {
  res.status(200).json({ message: 'User information' });
};

module.exports = { registerUser, loginUser, userInfo };
