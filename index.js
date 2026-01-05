// import express
const express = require('express');
// import and configure dotenv dependency
require('dotenv').config();
// imports the routes
const contactsRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');
// connect to database
const connectDB = require('./config/dbConnection');
// connectDB();

// create the app server from express
const app = express();

// declare the PORT variable
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route endpoint for all posts
app.use('/api/v1/contacts', contactsRoutes);
app.use('/api/v1/users', userRoutes);

// error handler middleware
app.use(errorHandler);

// app listens on port
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
