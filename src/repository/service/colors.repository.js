const { models } = require('../../libs/sequelize');
class ColorsRepository {
  async find(){
    return await models.Colors.findAll(
      {
        where: { statusId: 1 }
      }
    )
  }

  async findOne(identifier){
    return await models.Colors.findOne(
      {
        where: { id: identifier }
      }
    )
  }

}

module.exports = ColorsRepository;
