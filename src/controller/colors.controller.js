const express = require('express');
const { createColorSchema, updateColorSchema, getColorSchema } = require('../schemas/colors.schema');

const ColorsService = require('../services/colors.service');
const validatorMiddleware = require('../middlewares/validator.middleware');
const colorsService = new ColorsService();

const colorController = express.Router();


colorController.get('/', async (req, res, next) => {
  try {

    const {page, size} = req.query;

    const colors = await colorsService.findAll(page, size);
    res.json(colors)
  } catch (error) {
    next(error);
  }
})

colorController.get('/:id',
validatorMiddleware(getColorSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const color = await colorsService.findOne(id)
    res.json(color)
  } catch (error) {
    next(error);
  }
})

colorController.post('/',
validatorMiddleware(createColorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newColor = await colorsService.create(body);
      res.status(201).json(newColor);
    } catch (error) {
      next(error);
    }
  }
);


colorController.patch('/:id',
validatorMiddleware(getColorSchema, 'params'),
validatorMiddleware(updateColorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await colorsService.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

colorController.delete('/:id',
validatorMiddleware(getColorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await colorsService.delete(id);
      res.json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = colorController;

