const express = require('express');
require('dotenv').config()

// const users = require('./dataBase');
//
// const fileService = require('./services/file.service');
//
// const userController = require('./controllers/user.controller')
const userRoute = require('./routes/user.route')
const { PORT } = require('./configs/configs')


const app = express();
app.use(express.json()); // потрібно шоб навчити експрес читати джейсони (парсити)
app.use(express.urlencoded({extended: true})); // розширює можливості парсингу(просто включає бібліотеку qs)

// !! ці двоє експресджейсон і юрл енкодед обовязкові !!

app.get('/', (req, res) => { // req -  data sent from user, res - data sent to user
    console.log('Request processed')
    console.log(req);
    res.json("hello")
}) // from (req ... to hello)}  - it is controller

app.use('/users', userRoute);


app.listen(PORT, () => {
    console.log('App listen', PORT)
});

//
// app.get('/users', userController.getAllUsers)  // get, post, put, delete - http methods
//
// app.post('/users', userController.createUser );
//
// app.get('/users/:userId', userController.getUserByID )
//
// app.delete('/users/:userId', userController.deleteUserById );
//
// app.put('/users/:userId', userController.updateUserByID );

// const {userId} = req.params - бере інфу з динамічних змінних типу users/:userId
//res.json(users[userId])

//const {age, name} = req.body - бере інфу з баді (баді прописується на стороні фронта) . Використовується на пост, пут і деліт

//cmnd + opt + l порівняє все
// .env.example is need щоб показати як виглядати має звичайний енв, і екзампл заливається на гіт





