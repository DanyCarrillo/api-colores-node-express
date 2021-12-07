const express = require('express');


const ColorsService = require('../services/colors.service');
const colorsService = new ColorsService();

const colorController = express.Router();


colorController.get('/', async (req, res, next) => {
  try {
    const colors = await colorsService.find()
    res.json(colors)
  } catch (error) {
    next(error);
  }
})

colorController.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const color = await colorsService.findOne(id)
    res.json(color)
  } catch (error) {
    next(error);
  }
})

module.exports = colorController;

