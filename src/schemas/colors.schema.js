const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const color = Joi.string().min(7);
const year = Joi.number().integer().min(4);
const pantoneValue = Joi.string().min(6);

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
