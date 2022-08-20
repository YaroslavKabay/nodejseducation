const fileService = require("../services/file.service");
const {ApiError} = require('../errors');

module.exports={

    getAllUsers:  async (req,res, next) => {
        
        try{
            const usersFromService = await fileService.getUsers();
            res.json(usersFromService);
        } catch (e) {
            next(e);
        }
    },

    getUserByID: async (req,res, next) => {
        try{
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
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try{
            const user = await fileService.insertUser(req.body);
            res.status(201).json(user);

        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try{

            const { userId } = req.params;

            if (Number.isNaN(+userId) || +userId < 0) {
                throw new ApiError('Wrong user ID', 400)
            }

            const user = await fileService.deleteOneUser(+userId);

            if (!user) {
                throw new ApiError('User not found', 404)
            }

            res.sendStatus(204);

        } catch (e) {
            next(e);
        }
    },

    updateUserByID: async (req, res, next) => {
        try{
            const { userId } = req.params;

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
        } catch (e) {
            next(e);
        }
    }
}