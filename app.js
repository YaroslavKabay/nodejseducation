const express = require('express');
const users = require('./dataBase');

const fileService = require('./services/file.service');

const userController = require('./controllers/user.controller')
const userRoute = require('./routes/user.route')


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed')
    res.json("hello")
})

app.use('/users', userRoute);
//
// app.get('/users', userController.getAllUsers)
//
// app.post('/users', userController.createUser );
//
// app.get('/users/:userId', userController.getUserByID )
//
// app.delete('/users/:userId', userController.deleteUserById );
//
// app.put('/users/:userId', userController.updateUserByID );


app.listen(3000, () =>{
    console.log('App listen 3000')
});






