// import express
const express = require('express');
// create the app server from express
const app = express();
// import and configure dotenv dependency
require('dotenv').config();
// imports the routes
const postsRoutes = require('./routes/postsRoutes');
// declare the PORT variable
const PORT = process.env.PORT || 5000;

// app endpoint for all posts
app.use('/api/v1/posts', postsRoutes);

// app listens on port
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
