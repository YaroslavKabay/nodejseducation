const {Router} = require('express');


const {authController} = require('../controllers');
const {userMdlwr} = require('../middlewares');

const authRoute = Router();


authRoute.post(
    '/login',
    userMdlwr.getUserDynamicaly('body','email','email'),
    authController.login
)


module.exports = authRoute;
