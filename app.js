const express = require('express');
require('dotenv').config({path:`./environments/${process.env.NODE_ENV}.env`});
const mongoose = require('mongoose');

const {authRoute, userRoute, carRoute} = require('./routes');
const { PORT, MONGO_URL, NODE_ENV} = require('./configs/config');
const runCronJobs = require('./cron');
const { mainErrorHandler } = require('./errors');


const app = express();

if (NODE_ENV !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed');
    res.json('hello');
});

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/cars', carRoute);


app.use('*', (req, res, next)=>{
    next (new Error('Route not found'));
});

app.use(mainErrorHandler);

app.listen(PORT, () =>{
    console.log('App listen', PORT);
    mongoose.connect(MONGO_URL);

    runCronJobs();
});

