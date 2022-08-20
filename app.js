const express = require('express');
const users = require('./dataBase');

const fileService = require('./services/file.service');

const userController = require('./controllers/user.controller')
const userRoute = require('./routes/user.route')
const {mainErrorHandler} = require("./errors");


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed')
    res.json("hello")
})

app.use('/users', userRoute);

app.use('*', (req, res, next)=>{
    next (new Error('Route not found'))
})

app.use(mainErrorHandler)

app.listen(3000, () =>{
    console.log('App listen 3000')
});






