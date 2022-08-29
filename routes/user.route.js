const { Router } = require('express');

const {authMdlwr, commonMdlwr, userMdlwr} = require("../middlewares");
const {userController} = require("../controllers");

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.post(
    '/',
    userMdlwr.checkIfUserBodyIsValid,
    userMdlwr.checkIfUserEmailIsUniq,
    userController.createUser
);

userRouter.get(
    '/:userId',
    commonMdlwr.checkIfIdIsValid('userId'),
    userMdlwr.checkIfUserPresent(),
    userController.getUserByID );

userRouter.delete(
    '/:userId',
    commonMdlwr.checkIfIdIsValid('userId'),
    authMdlwr.checkIsAccessToken,
    userMdlwr.checkIfUserPresent(),
    userController.deleteUserById );

userRouter.put(
    '/:userId',
    commonMdlwr.checkIfIdIsValid('userId'),
    authMdlwr.checkIsAccessToken,
    userMdlwr.checkIfUserPresent(),
    userMdlwr.checkIfUserEmailIsUniq,
    userController.updateUserByID );


module.exports = userRouter;

