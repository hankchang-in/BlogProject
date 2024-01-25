const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;
const Router = require('./Routes/Routes')
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


//forwarding the request to the router!!
app.use('/' , Router);




//connecting to the database and running server on local machine
mongoose.connect("mongodb://localhost:27017/blogApp")
.then(()=>{
    app.listen(PORT, ()=>{console.log(`Database is successfully connected and Server is running on http://localhost:${PORT}`)} )
})
.catch((err)=>{
    console.log(err + "Database and Server is not connected!!");
})