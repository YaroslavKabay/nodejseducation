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

//Sql - реляційна база даних, дані зберігаються ву формі таблиць з чіткою структурою, дані повязані один з одним
//
// Nosql - нереляційна база даних, зберігає дані без чіткої структури і чітких звязків
//
// Odm(object document mapping) - для нереляційних баз даних, обробник між сервером і базою даних, монгус приклад
// Orm(object relation mapping )- для реляційних баз даних, секвалайз приклад









