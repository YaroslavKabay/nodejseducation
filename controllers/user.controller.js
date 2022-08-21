const {ApiError} = require('../errors');
const User = require('../dataBase/User');
const {userService} = require("../services");

module.exports={

    getAllUsers:  async (req,res, next) => {
        
        try{
            const usersFromService = await User.find();
            res.json(usersFromService);
        } catch (e) {
            next(e);
        }
    },

    getUserByID: async (req,res, next) => {
        try{
            const {userId} = req.params;

            const user = await User.findById(userId);

            if (!user) {
                throw new ApiError('User not found', 400);
            }

            res.json(user);
        } catch (e) {
            next(e);
        }
    },
    createUser: async (req, res, next) => {
        try{
            const user = await userService.createUser(req.body);
            res.status(201).json(user);

        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res, next) => {
        try{

            const { userId } = req.params;


            await userService.deleteUserById(+userId);


            res.sendStatus(204);

        } catch (e) {
            next(e);
        }
    },

    updateUserByID: async (req, res, next) => {
        try{
            const { userId } = req.params;


            const user = await userService.updateUserByID(+userId, req.body);


            res.json(user);
        } catch (e) {
            next(e);
        }
    }
}