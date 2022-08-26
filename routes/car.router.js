const { Router } = require('express');

const { carController } = require('../controllers');
const { commonMdlwr,  userMdlwr, carMdlwr } = require('../middlewares');

const carRouter = Router();

carRouter.post(
    '/',
    commonMdlwr.checkIfIdIsValid('userId', 'query'),
    // carMdlwr.checkIsCarBodyValid,
    // authMdlwr.checkIsAccessToken,
    userMdlwr.checkIfUserPresent('query'),
    carController.createCar
);

carRouter.get(
    '/:carId',
    commonMdlwr.checkIfIdIsValid('carId'),
    carMdlwr.isCarPresent,
    carController.getCarById
);
carRouter.put(
    '/:carId',
    commonMdlwr.checkIfIdIsValid('carId'),
    carMdlwr.isCarPresent,
    carController.updateCarById
);
carRouter.delete(
    '/:carId',
    commonMdlwr.checkIfIdIsValid('carId'),
    // authMdlwr.checkIsAccessToken,
    carMdlwr.isCarPresent,
    carController.deleteCarByID
);

module.exports = carRouter;

// const { Router } = require('express');
//
// const { carController } = require('../controllers');
// const { commonMdlwr, carMdlwr, userMdlwr, authMdlwr } = require('../middlewares');
//
// const carRouter = Router();
//
// carRouter.post(
//     '/',
//     commonMdlwr.checkIsIdValid('userId', 'query'),
//     carMdlwr.checkIsCarBodyValid,
//     authMdlwr.checkIsAccessToken,
//     userMdlwr.isUserPresent('query'),
//     carController.createCar
// );
//
// carRouter.get(
//     '/:carId',
//     commonMdlwr.checkIsIdValid('carId'),
//     carMdlwr.isCarPresent,
//     carController.getCarById
// );
// carRouter.put(
//     '/:carId',
//     commonMdlwr.checkIsIdValid('carId'),
//     //TODO validation body
//     authMdlwr.checkIsAccessToken,
//     carMdlwr.isCarPresent,
//     carController.updateCarById
// );
// carRouter.delete(
//     '/:carId',
//     commonMdlwr.checkIsIdValid('carId'),
//     authMdlwr.checkIsAccessToken,
//     carMdlwr.isCarPresent,
//     carController.deleteCarByID
// );
//
// module.exports = carRouter;