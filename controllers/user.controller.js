const fileService = require("../services/file.service");
module.exports={
    getAllUsers:  async (req,res) => { // називається метод (getallusers)
        const usersFromService = await fileService.getUsers();
        res.json(usersFromService);
    },

    createUser:async (req, res) => {

        const user = await fileService.insertUser(req.body);

        res.status(201).json(user);
    },

    getUserByID: async (req,res) => {

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
    },

    deleteUserById: async (req, res) => {
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
    },

    updateUserByID: async (req, res) => {
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

    }
}