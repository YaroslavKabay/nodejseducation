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


// app.delete('/users/:userId', (req, res) => {
//     // const userId = req.params.user;
//     const {userId} = req.body;
//     const account = users[userId];
//
//     if (!account) {
//         return res.status(400).json('User not found');
//     }
//
//     delete users[userId];
//     return res.status(204)
//
// });
//

// app.post('/users', (req,res) => {
//     const {username, password} = req.body;
//     console.log( 'username:', username)
//     console.log( 'password:', password)
//
//     if (Number.isNaN(+password) || +password<0) {
//         res.status(400).json('Wrong username');
//         return;
//     }
//     users.push({password, username})
//
//     res.status(201).json('ok');
// })

app.post('/users', async (req, res) => {
    const { age, name } = req.body;

    if (Number.isNaN(+age) || age <= 0) {
        res.status(400).json('Wrong user age');
        return;
    }

    const user = await fileService.insertUser({ age, name });

    res.status(201).json(user);
});



app.listen(3000, () =>{
    console.log('App listen 3000')
});







//
// const express = require('express');
// const users = require('./dataBase');
//
// const fileService = require('./services/file.service');
//
// const app = express();
// @@ -14,19 +14,31 @@ app.get('/', (req, res) => {
// });
//
// app.get('/users', async (req, res) => {
//     let usersFronService = await fileService.getUsers();
//     const usersFronService = await fileService.getUsers();
//     res.json(usersFronService);
// });
// app.post('/users', async (req, res) => {
//     const { age, name } = req.body;
//
//     if (Number.isNaN(+age) || age <= 0) {
//         res.status(400).json('Wrong user age');
//         return;
//     }
//
//     const user = await fileService.insertUser({ age, name });
//
//     res.status(201).json(user);
// });
//
// app.get('/users/:userId', (req, res) => {
//     app.get('/users/:userId', async (req, res) => {
//         const { userId } = req.params;
//
//         if (Number.isNaN(+userId) || +userId < 0) {
//             res.status(400).json('Wrong user id');
//             return;
//         }
//
//         const user = users[userId];
//         const user = await fileService.getOneUser(+userId);
//
//         if (!user) {
//             res.status(404).json('User not found');
//         @@ -36,23 +48,48 @@ app.get('/users/:userId', (req, res) => {
//             res.json(user);
//         });
//
//             app.post('/users', (req, res) => {
//                 const {age, name} = req.body;
//                 app.put('/users/:userId', async (req, res) => {
//                     const { userId } = req.params;
//                     const { age, name } = req.body;
//
//                     if (Number.isNaN(+userId) || +userId < 0) {
//                         res.status(400).json('Wrong user id');
//                         return;
//                     }
//
//                     console.log(age, 'age');
//                     console.log(name, 'name');
//                     const userObject = {};
//                     if (age) userObject.age = age;
//                     if (name) userObject.name = name;
//
//                     if (Number.isNaN(+age) || age <= 0) {
//                         res.status(400).json('Wrong user age');
//                         const user = await fileService.updateUser(+userId, userObject);
//
//                         if (!user) {
//                             res.status(404).json('User not found');
//                             return;
//                         }
//
//                         users.push({ name, age })
//                         res.status(201).json(user);
//                     });
//
//                     app.delete('/users/:userId', async (req, res) => {
//                         const { userId } = req.params;
//
//                         if (Number.isNaN(+userId) || +userId < 0) {
//                             res.status(400).json('Wrong user id');
//                             return;
//                         }
//
//                         const user = await fileService.deleteOneUser(+userId);
//
//                         if (!user) {
//                             res.status(404).json('User not found');
//                             return;
//                         }
//
//                         res.json('OK');
//                         res.sendStatus(204);
//                     });
//
//                     app.listen(5000, () => {
//                         console.log('App listen 5000')
//                         console.log('App listen 5000');
//                     });
