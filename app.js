const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');


const {userRoute,carRoute} = require('./routes')
const { PORT, MONGO_URL} = require('./configs/config')
const { mainErrorHandler } = require("./errors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed')
    res.json("hello")
})

app.use('/users', userRoute);
app.use('/cars', carRoute);


app.use('*', (req, res, next)=>{
    next (new Error('Route not found'))
})

app.use(mainErrorHandler)

app.listen(PORT, () =>{
    console.log('App listen', PORT)
    mongoose.connect(MONGO_URL);
});










