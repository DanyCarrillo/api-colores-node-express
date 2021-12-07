const express = require('express');
const colorController = require('../controller/colors.controller');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/colors', colorController);

}

module.exports = routerApi;
