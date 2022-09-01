const Joi = require('joi');

const yearValidator = Joi.number().integer()
  .min(1950)
  .max(new Date().getFullYear());
const madelValidator = Joi.string().alphanum()
  .min(2)
  .max(35)
  .trim();

const newCarValidator = Joi.object({
  year: yearValidator.required(),
  model: madelValidator.required(),
});

const updateCarValidator = Joi.object({
  year: yearValidator,
  model: madelValidator,
});

module.exports = {
  newCarValidator,
  updateCarValidator,
};
