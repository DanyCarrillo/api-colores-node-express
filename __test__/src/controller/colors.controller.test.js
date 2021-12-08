const ColorsService = require('../../../src/services/colors.service');
const colorsService = new ColorsService();

process.env.DATABASE_URL = 'mysql://root:@localhost:3306/multiplicadb'


test("Find colors",async()=>{
  const PAGE_PARAM = 1;
  const SIZE_PARAM = 10;
  const {page, data} = await colorsService.findAll(PAGE_PARAM, SIZE_PARAM);
  expect(page).toBe(PAGE_PARAM);
  expect(data.length).toBe(SIZE_PARAM);
})

test("Find one color",async()=>{
  const ID_COLOR_PARAM = 1;

  const EXPECT_NAME = 'cerulean';
  const EXPECT_COLOR = '#98B2D1';
  const EXPECT_YEAR = 2000;
  const EXPECT_PANTONE_VALUE = '15-4020';

  const {id, name, color, year, pantoneValue} = await colorsService.findOne(ID_COLOR_PARAM);
  expect(id).toBe(ID_COLOR_PARAM);
  expect(name).toBe(EXPECT_NAME);
  expect(color).toBe(EXPECT_COLOR);
  expect(year).toBe(EXPECT_YEAR);
  expect(pantoneValue).toBe(EXPECT_PANTONE_VALUE);
})

test("Create colors",async()=>{
  const BODY = {
    name: "black",
    color: "#000000",
    year: 2021,
    pantoneValue: "14-4421"
  }
  const {name, color, year, pantoneValue} = await colorsService.create(BODY);
  expect(name).toBe(BODY.name);
  expect(color).toBe(BODY.color);
  expect(year).toBe(BODY.year);
  expect(pantoneValue).toBe(BODY.pantoneValue);
})

test("Update color",async()=>{
  const ID_COLOR_PARAM = 1;

  const BODY = {
    year: 2021,
    pantoneValue: "14-4522"
  }

  const {id, pantoneValue, year } = await colorsService.update(ID_COLOR_PARAM, BODY);
  expect(id).toBe(ID_COLOR_PARAM);
  expect(pantoneValue).toBe(BODY.pantoneValue);
  expect(year).toBe(BODY.year);
})
