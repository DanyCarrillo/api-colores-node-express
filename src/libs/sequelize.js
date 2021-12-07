const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupEntity = require('./../repository/entity');

const options = {
  dialect: 'mysql',
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupEntity(sequelize);

module.exports = sequelize;
