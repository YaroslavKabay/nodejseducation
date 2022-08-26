const { Router } = require('express');

const { carController } = require('../controllers');
const { commonMdlwr,  userMdlwr, carMdlwr } = require('../middlewares');

const carRouter = Router();

carRouter.post(
    '/',
    commonMdlwr.checkIfIdIsValid('userId', 'query'),
    // carMdlwr.checkIsCarBodyValid,
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
    carMdlwr.isCarPresent,
    carController.deleteCarByID
);

module.exports = carRouter;

