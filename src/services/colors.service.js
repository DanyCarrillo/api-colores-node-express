const ColorsRepository = require('../repository/service/colors.repository');
const boom = require('@hapi/boom');
const NUMBERS = require('../helpers/numbers');
const colorsRepository = new ColorsRepository();
class ColorsService{
  constructor() {}
  async findAll(page, size){

    const offset = await this. pageResolver(page)
    const limit = await this.limitResolver(size)

    let response = {
      page: offset + NUMBERS.ONE ,
      totalPage: NUMBERS.ZERO,
      totalCount: NUMBERS.ZERO,
      data:[]
    }

    const { count, rows} = await colorsRepository.findCountAll(Number(offset*limit), Number(limit));
    if(rows.length > NUMBERS.ZERO){
      for(let item of rows){
        delete item.dataValues.created;
        delete item.dataValues.modified;
        delete item.dataValues.statusId;
      }
      response.totalCount = count;
      response.totalPage = await this.totalPageResolver(count,limit);
      response.data = rows;
    }

    return response;
  }
  async pageResolver(page){
    let pageNumber = page ? page - NUMBERS.ONE : NUMBERS.ZERO;
    pageNumber = pageNumber < NUMBERS.ZERO ? NUMBERS.ZERO : pageNumber;
    return pageNumber;
  }
  async totalPageResolver(totalCount, limit){
    const total = totalCount / limit;
    return Math.ceil(total);
  }
  async limitResolver(limit){
    const sizeLimit = limit ? limit : NUMBERS.THEN
    return sizeLimit;
  }

  async find(){
    const data = await colorsRepository.find();
    if(data.length > NUMBERS.ZERO){
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
    if(!data){
      throw boom.notFound('color not found')
    }
    delete data.dataValues.created;
    delete data.dataValues.modified;
    delete data.dataValues.statusId;
    return data;
  }

  async create (data){
    data.statusId = NUMBERS.ONE;
    console.log(data);
    const created = await colorsRepository.create(data);
    delete created.dataValues.created;
    delete created.dataValues.modified;
    delete created.dataValues.statusId;
    return created;
  }
  async update (identifier, changes){
    const data = await colorsRepository.findOne(identifier);
    if(!data){
      throw boom.notFound('color not found')
    }
    const updated = await colorsRepository.update(identifier, changes);
    delete updated.dataValues.created;
    delete updated.dataValues.modified;
    delete updated.dataValues.statusId;
    return updated;
  }

  async delete (identifier){
    const data = await colorsRepository.findOne(identifier);
    if(!data){
      throw boom.notFound('color not found')
    }
    const deleted = await colorsRepository.delete(identifier);
    return deleted;
  }
}

module.exports = ColorsService;
