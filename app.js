require('dotenv').config({path:`./environments/${process.env.NODE_ENV}.env`});

const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const fileUpload = require('express-fileupload');

const mongoose = require('mongoose');

const {authRoute, userRoute, carRoute} = require('./routes');
const { PORT, MONGO_URL, NODE_ENV} = require('./configs/config');
const runCronJobs = require('./cron');
const { mainErrorHandler } = require('./errors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {cors: 'http://localhost:63342/'});
// const io = socketIo(server, {cors: 'http://localhost:63342'});

io.on('connection', (socket) => {
    console.log('CONNECTED');
    console.log('=========================================================');
    console.log(socket);
    console.log('=========================================================');

    // console.log('=========================================================');
    // console.log(socket.id);
    // console.log(socket.handshake.auth);
    // console.log('=========================================================');

    // socket.on('message:create', (data) => {
    //     console.log('data _________');
    //     console.log(data);
    //     console.log('data _________');
    //
    //     // EMIT EVENT TO SENDER
    //     // socket.emit('user:create', { name: 'Socket', hard: 10 });
    //
    //     // EMIT EVENT ALL USERS INCLUDE SENDER
    //     // io.emit('user:create', { name: 'Socket', hard: 10 });
    //
    //     // EMIT EVENT ALL USERS EXCLUDE SENDER
    //     socket.broadcast.emit('user:create', { name: 'Socket', hard: 10 });
    // });
    //
    // socket.on('room:join', (data) => userJoinRoom(io, socket, data));
});


if (NODE_ENV !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(fileUpload({}));

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

server.listen(PORT, () =>{
    console.log('App listen', PORT);
    mongoose.connect(MONGO_URL);
    console.log(process.env.NODE_ENV);

    runCronJobs();
});

