const {Router} = require('express');


const {authController} = require('../controllers');
const {userMdlwr, authMdlwr} = require('../middlewares');

const authRoute = Router();


authRoute.post(
    '/login',
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

)


module.exports = authRoute;
