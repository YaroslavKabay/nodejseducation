const { Router } = require('express');

const { carController } = require('../controllers');
const { authMdlwr, commonMdlwr, carMdlwr } = require('../middlewares');
const {newCarValidator, updateCarValidator} = require('../validators/car.validators');

const carRouter = Router();

carRouter.post(
  '/',
  commonMdlwr.checkIfBodyIsValid(newCarValidator),
  authMdlwr.checkIsAccessToken,
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
  commonMdlwr.checkIfBodyIsValid(updateCarValidator),
  authMdlwr.checkIsAccessToken,
  carMdlwr.isCarPresent,
  carController.updateCarById
);
carRouter.delete(
  '/:carId',
  commonMdlwr.checkIfIdIsValid('carId'),
  authMdlwr.checkIsAccessToken,
  carMdlwr.isCarPresent,
  carController.deleteCarByID
);

module.exports = carRouter;

