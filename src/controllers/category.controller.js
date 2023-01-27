const { categoryService } = require('../services');
const { BAD_REQUEST, CREATED } = require('../utils/statusCodes');

const create = async (req, res, next) => {
  const newCategory = req.body;

  try {
    const { type, message } = await categoryService.create(newCategory);
    if (type) return res.status(BAD_REQUEST).json({ message });
    return res.status(CREATED).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };