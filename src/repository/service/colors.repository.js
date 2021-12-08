const { models } = require('../../libs/sequelize');
const NUMBERS = require('../../helpers/numbers');

class ColorsRepository {
  constructor() {}
  async find(){
    return await models.Colors.findAll(
      {
        where: { statusId: NUMBERS.ONE },
        order: [
          ['created', 'DESC']
      ]
      }
    )
  }

  async findCountAll(offset, limit){
    const { count, rows } =  await models.Colors.findAndCountAll({
      where: {
         statusId: NUMBERS.ONE
      },
      offset: offset,
      limit: limit
    });
    return {count, rows};
  }

  async findOne(identifier){
    return await models.Colors.findOne(
      {
        where: { id: identifier, statusId: NUMBERS.ONE }
      }
    )
  }

  async create(data){
    return await models.Colors.create(data)
  }

  async update(identifier, changes){
    const color = await this.findOne(identifier);
    const updated = await color.update(changes);
    return updated;
  }

  async delete(identifier){
    const color = await this.findOne(identifier);
    await color.update({statusId: NUMBERS.TWO});
    return Number(identifier);
  }


}

module.exports = ColorsRepository;
