const express = require('express');
const users = require('./dataBase');
const fileService = require('./services/file.service');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    console.log('Request processed')

    res.json("hello")
})

app.get('/users', async (req,res) => {
    const usersFromService = await fileService.getUsers();
    res.json(usersFromService);
})

app.post('/users', async (req, res) => {
    const { age, name } = req.body;

    if (Number.isNaN(+age) || age <= 0) {
        res.status(400).json('Wrong user age');
        return;
    }

    const user = await fileService.insertUser({ age, name });

    res.status(201).json(user);
});

app.get('/users/:userId', async (req,res) => {

    const {userId} = req.params;

    if (Number.isNaN(+userId) || +userId<0) {
        res.status(400).json('Wrong user id');
        return;
    }

    const user = await fileService.getOneUser(+userId);
    if (!user) {
        res.status(400).json('User not found');
        return;
    }

    res.json(user);
})

app.delete('/users/:userId', async (req, res) => {
    const { userId } = req.params;

    if (Number.isNaN(+userId) || +userId < 0) {
        res.status(400).json('Wrong user id');
        return;
    }

    const user = await fileService.deleteOneUser(+userId);

    if (!user) {
        res.status(404).json('User not found');
        return;
    }

    res.sendStatus(204);
});

app.put('/users/:userId', async (req, res) => {
    const { userId } = req.params;
    // const { age, name } = req.body;

    if (Number.isNaN(+userId) || +userId < 0) {
        res.status(400).json('Wrong user id');
        return;
    }

    const user = await fileService.updateUser(+userId, req.body);

    if (!user) {
        res.status(404).json('User not found');
        return;
    }


    res.status(201).json(user);

});


app.listen(3000, () =>{
    console.log('App listen 3000')
});






