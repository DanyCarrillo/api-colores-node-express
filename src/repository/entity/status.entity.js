const { Model, DataTypes } = require('sequelize');
const {TABLES_NAME} = require('../../utils/constants');

const {T_STATUS}=TABLES_NAME;

const StatusEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Status extends Model {
  static associate(models) {
    this.hasMany(models.Colors, {
      as: 'colors',
      foreignKey: 'statusId'
    });
  }


  static config(sequelize) {
    return {
      sequelize,
      tableName: T_STATUS,
      modelName: 'Status',
      timestamps: false
    }
  }
}


module.exports = { T_STATUS, StatusEntity, Status }
