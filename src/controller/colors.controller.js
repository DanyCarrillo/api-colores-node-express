const express = require('express');

const { updateColorSchema, createColorSchema, getColorSchema } = require('./../schemas/colors.schema');

const colorController = express.Router();

colorController.get('/', async (req, res) => {
  try {
    res.json({
      name:'Dany'
    })
  } catch (error) {
    console.log(error);
  }
})

module.exports = colorController;
