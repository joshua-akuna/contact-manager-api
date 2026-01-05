const { Schema, model } = require('mongoose');

const userModel = Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: [true, 'Username already taken.'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required.'],
      unique: [true, 'Email already taken.'],
    },
    password: {
      type: String,
      required: [true, 'Please, add a user password.'],
    },
  },
  { timestamps: true }
);

module.exports = model('User', userModel);
