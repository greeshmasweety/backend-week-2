const express = require('express');
const app = express();
const dbConnection = require('./src/config/dbconnections');
const admin = require('./src/routes/adminroutes');


dbConnection();
app.use(express.json());
app.get('/',(req,res)=>{
    
    console.log("Home");
    res.send("Hello world!")
})
app.use('/auth',admin)
app.listen(3000,()=>{
    console.log("server is running..")
})