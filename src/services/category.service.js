const { Category } = require('../models');

const create = async (newCategory) => {
  const category = await Category.create(newCategory);
  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { create, findAll };