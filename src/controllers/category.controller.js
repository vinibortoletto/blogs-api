const { categoryService } = require('../services');
const { CREATED, OK } = require('../utils/statusCodes');

const create = async (req, res, next) => {
  const newCategory = req.body;

  try {
    const category = await categoryService.create(newCategory);
    return res.status(CREATED).json(category);
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const categories = await categoryService.findAll();
    return res.status(OK).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, findAll };