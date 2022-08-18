const { Router } = require('express');

const userController = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.post('/', userMiddleware.checkIfUserBodyIsValid, userController.createUser );

userRouter.get('/:userId', userController.getUserByID );

userRouter.delete('/:userId', userController.deleteUserById );

userRouter.put('/:userId', userController.updateUserByID );


module.exports = userRouter;
