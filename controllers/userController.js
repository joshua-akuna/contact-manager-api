//@desc Register a new user
//@route POST /api/v1/users/register
//@access public
const registerUser = (req, res) => {
  res.status(201).json({ message: 'User registered!' });
};

//@desc Login existing user
//@route POST /api/v1/users/login
//@access public
const loginUser = (req, res) => {
  res.status(200).json({ message: 'User logged in' });
};

//@desc returns user information
//@route GET /api/v1/users/info
//@access public
const userInfo = (req, res) => {
  res.status(200).json({ message: 'User information' });
};

module.exports = { registerUser, loginUser, userInfo };
