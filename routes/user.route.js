const { Router } = require('express');

const {authMdlwr, commonMdlwr, userMdlwr, fileMdlwr} = require('../middlewares');
const {userController} = require('../controllers');
const {newUserValidator,updateUserValidator}= require('../validators/user.validators');

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.post(
  '/',
  commonMdlwr.checkIfBodyIsValid(newUserValidator),
  userMdlwr.checkIfUserEmailIsUniq,
  userController.createUser
);

userRouter.get(
  '/:userId',
  commonMdlwr.checkIfIdIsValid('userId'),
  userMdlwr.checkIfUserPresent(),
  userController.getUserByID );

userRouter.post(
    '/:userId/avatar',
    commonMdlwr.checkIfIdIsValid('userId'),
    fileMdlwr.checkUploadedAvatar,
    userMdlwr.checkIfUserPresent(),
    userController.uploadAvatar );

userRouter.get(
    '/:userId/avatar',
    commonMdlwr.checkIfIdIsValid('userId'),
    userMdlwr.checkIfUserPresent(),
    userController.getImages );

userRouter.delete(
    '/:userId/avatar/:imageId',
    commonMdlwr.checkIfIdIsValid('userId'),
    commonMdlwr.checkIfIdIsValid('imageId'),
    userMdlwr.checkIfUserPresent(),
    userController.deleteImages );

userRouter.delete(
  '/:userId',
  commonMdlwr.checkIfIdIsValid('userId'),
  authMdlwr.checkIsAccessToken,
  userMdlwr.checkIfUserPresent(),
  userController.deleteUserById );

userRouter.put(
  '/:userId',
  commonMdlwr.checkIfIdIsValid('userId'),
  commonMdlwr.checkIfBodyIsValid(updateUserValidator),
  authMdlwr.checkIsAccessToken,
  userMdlwr.checkIfUserPresent(),
  userMdlwr.checkIfUserEmailIsUniq,
  userController.updateUserByID );


module.exports = userRouter;


