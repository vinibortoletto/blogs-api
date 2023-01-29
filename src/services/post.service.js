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

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return { type: 'NOT_FOUND', message: 'Post does not exist' };
  }

  return { type: null, message: post };
};

const update = async (updatedPost, id, email) => {
  const { id: userId } = await User.findOne({ where: { email } });

  const [isUpdated] = await BlogPost.update(updatedPost, {
    where: { id, userId },
  });

  if (!isUpdated) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

  const post = await findById(id);
  return post;
};

module.exports = { 
  create, 
  findAll, 
  findById,
  update,
};