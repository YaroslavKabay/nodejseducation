const express = require('express');
const users = require('./dataBase');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed')

    res.json("hello")
})

app.get('/users', (req,res) => {
    res.json(users);
})

app.get('/users/:userId', (req,res) => {

    const {userId} = req.params;

    if (Number.isNaN(+userId) || +userId<0) {
        res.status(400).json('Wrong user id');
        return;
    }

    const user = users[userId];
    if (!user) {
        res.status(400).json('User not found');
        return;
    }

    res.json(user);
})

app.delete('/users/:userId', (req, res) => {
    // const userId = req.params.user;
    const {userId} = req.body;
    const account = users[userId];

    if (!account) {
        return res.status(400).json('User not found');
    }

    delete users[userId];
    return res.status(204)

});

app.post('/users', (req,res) => {
    const {username, password} = req.body;
    console.log( 'username:', username)
    console.log( 'password:', password)

    if (Number.isNaN(+password) || +password<0) {
        res.status(400).json('Wrong username');
        return;
    }
    users.push({password, username})

    res.status(201).json('ok');
})



app.listen(4000, () =>{
    console.log('App listen 4000')
});
