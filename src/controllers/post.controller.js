const { postService } = require('../services');
const { CREATED, BAD_REQUEST } = require('../utils/statusCodes');

const create = async (req, res, next) => {
  const { email } = req.user;
  const newPost = req.body;

  try {
    const { type, message } = await postService.create(newPost, email);
    if (type) return res.status(BAD_REQUEST).json({ message });
    return res.status(CREATED).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };