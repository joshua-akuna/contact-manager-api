// import express
const express = require('express');
// create the app server from express
const app = express();
// import and configure dotenv dependency
require('dotenv').config();
// imports the routes
const contactsRoutes = require('./routes/contactsRoutes');
// declare the PORT variable
const PORT = process.env.PORT || 5000;

// app endpoint for all posts
app.use('/api/v1/contacts', contactsRoutes);

// app listens on port
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
