const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

//@desc Register a new user
//@route POST /api/v1/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  // checks if all fields are provided
  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields are required.');
  }
  // checks if user already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error('Username already exists.');
  }
  // checks if user email already registered
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(400);
    throw new Error('Email already registered. Please login.');
  }
  // hashes the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // creates the new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  // sends new user data as response
  res
    .status(201)
    .json({ _id: user._id, email: user.email, username: user.username });
});

//@desc Login existing user
//@route POST /api/v1/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // checks if all fields are provided
  if (!email || !password) {
    res.status(400);
    throw new Error('All fields are required.');
  }

  // checks if user exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('Invalid username or password.');
  }

  // compares the provided password with the user hashed password
  if (bcrypt.compare(password, user.password)) {
    console.log(process.env.JWT_SECRET);
    // generates JWT access token
    const accessToken = jwt.sign(
      {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    res.status(200).json({ accessToken });
  } else {
    // if passwords do not match
    res.status(400);
    throw new Error('Invalid username or password.');
  }
});

//@desc returns user information
//@route GET /api/v1/users/info
//@access private
const userInfo = (req, res) => {
  res.status(200).json({ message: 'User information' });
};

module.exports = { registerUser, loginUser, userInfo };
