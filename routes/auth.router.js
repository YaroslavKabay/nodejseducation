const {Router} = require('express');


const {authController} = require('../controllers');
const {userMdlwr, authMdlwr, commonMdlwr} = require('../middlewares');
const {loginUserValidator} = require('../validators/user.validators');
const {tokenTypeEnum} = require("../constants");

const authRoute = Router();


authRoute.post(
  '/login',
  commonMdlwr.checkIfBodyIsValid(loginUserValidator),
  userMdlwr.getUserDynamicaly('body','email','email'),
  authController.login
);

authRoute.post(
  '/logout',
  authMdlwr.checkIsAccessToken,
  authController.logout
);

authRoute.post(
  '/refresh',
  authMdlwr.checkIsRefreshToken,
  authController.refresh
);

authRoute.post(
    '/password/forgot',
    userMdlwr.getUserDynamicaly('body','email','email'),
    authController.forgotPassword
);

authRoute.put(
    '/password/forgot',
    authMdlwr.checkActionToken(tokenTypeEnum.FORGOT_PASSWORD),
    authController.setNewPasswordForgot
);

module.exports = authRoute;
