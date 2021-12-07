const NUMBERS = require('../helpers/numbers');

const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const color = Joi.string().min(NUMBERS.SEVEN);
const year = Joi.number().integer().min(NUMBERS.FOUR);
const pantoneValue = Joi.string().min(NUMBERS.SIX);

const createColorSchema = Joi.object({
  name: name.required(),
  color: color.required(),
  year: year.required(),
  pantoneValue: pantoneValue.required()
});

const updateColorSchema = Joi.object({
  name: name,
  color: color,
  year: year,
  pantoneValue: pantoneValue
});

const getColorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createColorSchema, updateColorSchema, getColorSchema }
