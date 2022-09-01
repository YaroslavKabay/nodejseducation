const {Router} = require('express');


const {authController} = require('../controllers');
const {userMdlwr, authMdlwr, commonMdlwr} = require('../middlewares');
const {loginUserValidator} = require('../validators/user.validators');

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


module.exports = authRoute;
