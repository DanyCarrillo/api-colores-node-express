const {Colors, ColorsEntity} = require('./colors.entity');
const {Status, StatusEntity} = require('./status.entity');


function setupEntity(sequelize) {
  Status.init(StatusEntity, Status.config(sequelize));
  Colors.init(ColorsEntity, Colors.config(sequelize));

  Status.associate(sequelize.models);


}

module.exports = setupEntity;
