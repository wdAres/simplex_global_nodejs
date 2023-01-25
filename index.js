const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express(); 

// Database connection and checking
mongoose.connect('mongodb://127.0.0.1:27017/simplex_global'); 
mongoose.connection.on('connected' , connected=>{
  console.log('database is connected');
});

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// notFound middleware
const notFound = require('./src/middlewares/notFound');

// Admin Route
const AdminRoutes = require('./src/routes/admin/index')

// Now we are going to use env for using variables
dotenv.config();
const PORT = process.env.PORT || 4500;

app.use(bodyparser.json())

app.get('/' , (req,resp)=>{
  resp.json("Welcome to our server")
})

// Admin Routes Used here 
app.use('/admin' , AdminRoutes)

// notFound
app.use(notFound);

app.listen(PORT, () => {
    console.log(`your server is on http://localhost:${PORT}`);
});

