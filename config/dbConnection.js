const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      'Database connected: ',
      connect.connection.host,
      connect.connection.name
    );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
