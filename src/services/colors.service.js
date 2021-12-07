const ColorsRepository = require('../repository/service/colors.repository');
const colorsRepository = new ColorsRepository();
class ColorsService{
  async find(){
    const data = await colorsRepository.find();
    if(data.length > 0){
      for(let item of data){
        delete item.dataValues.created;
        delete item.dataValues.modified;
        delete item.dataValues.statusId;
      }
    }
    return data;
  }

  async findOne(identifier){
    const data = await colorsRepository.findOne(identifier);
    delete data.dataValues.created;
    delete data.dataValues.modified;
    delete data.dataValues.statusId;
    return data;
  }
}

module.exports = ColorsService;
