const { Op } = require('sequelize');
const { BlogPost, User, PostCategory, Category } = require('../models');

const create = async ({ title, content, categoryIds }, email) => {
  const { id: userId } = await User.findOne({ where: { email } });
  const post = await BlogPost.create({ title, content, userId });
  
  const { count } = await Category.findAndCountAll({
    where: { id: { [Op.in]: categoryIds } },
  });

  if (count !== categoryIds.length) {
    return { type: 'INVALID_CATEGORY', message: 'one or more "categoryIds" not found' };
  }

  await PostCategory.bulkCreate(
    categoryIds.map((categoryId) => ({
        postId: post.id, categoryId,
    })),
  );

  return { type: null, message: post };
};

module.exports = { create };