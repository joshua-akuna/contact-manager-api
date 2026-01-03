// import express
const express = require('express')
// create the app server from express
const app = express()
// import and configure dotenv dependency
require('dotenv').config()
// declare the PORT variable
const PORT = process.env.PORT || 5000

// a get api endpoint
app.get('/api/v1/posts', (req, res)=>{
    res.status(200).json({"message": "Hello Josh"})
})

// app listens on port
app.listen(PORT, ()=> {
    console.log(`app listening on port ${PORT}`);
})