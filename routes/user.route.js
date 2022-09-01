const { Router } = require('express');

const {authMdlwr, commonMdlwr, userMdlwr} = require('../middlewares');
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

// const { Router } = require('express');
//
// const { userController } = require('../controllers');
// const { authMdlwr, commonMdlwr, userMdlwr } = require('../middlewares');
//
// const userRouter = Router();
//
// userRouter.get('/', userController.getAllUsers);
// userRouter.post(
//     '/',
//     userMdlwr.checkIsUserBodyValid,
//     userMdlwr.checkIsUserEmailUniq,
//     userController.createUser
// );
//
// userRouter.get(
//     '/:userId',
//     commonMdlwr.checkIsIdValid('userId'),
//     userMdlwr.isUserPresent(),
//     userController.getUserById
// );
// userRouter.put(
//     '/:userId',
//     commonMdlwr.checkIsIdValid('userId'),
//     authMdlwr.checkIsAccessToken,
//     userMdlwr.isUserPresent(),
//     userMdlwr.checkIsUserEmailUniq,
//     userController.updateUserById
// );
// userRouter.delete(
//     '/:userId',
//     commonMdlwr.checkIsIdValid('userId'),
//     authMdlwr.checkIsAccessToken,
//     userMdlwr.isUserPresent(),
//     userController.deleteUserByID
// );
//
// module.exports = userRouter;
