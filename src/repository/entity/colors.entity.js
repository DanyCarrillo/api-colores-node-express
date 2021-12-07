const { Model, DataTypes, Sequelize } = require('sequelize');
const {TABLES_NAME} = require('../../utils/constants');

const {T_COLORS, T_STATUS}=TABLES_NAME;

const ColorsEntity = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  color: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  statusId: {
    field: 'id_status',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: T_STATUS,
      key: 'id'
    }
  },
  pantoneValue: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'pantone_value',
  },
  created: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  modified: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
}

class Colors extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: T_COLORS,
      modelName: 'Colors',
      timestamps: false
    }
  }
}


module.exports = { T_COLORS, ColorsEntity, Colors }
