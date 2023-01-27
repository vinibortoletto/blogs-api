const { Category } = require('../models');

const create = async (newCategory) => {
  const category = await Category.create(newCategory);
  return { type: null, message: category };
};

module.exports = { create };