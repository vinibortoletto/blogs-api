const { postService } = require('../services');
const { CREATED, BAD_REQUEST, OK, NOT_FOUND, UNAUTHORIZED } = require('../utils/statusCodes');

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

const findAll = async (_req, res, next) => {
  try {
    const posts = await postService.findAll();
    return res.status(OK).json(posts);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { type, message } = await postService.findById(id);
    if (type) return res.status(NOT_FOUND).json({ message });
    return res.status(OK).json(message);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const updatedPost = req.body;
  const { id } = req.params;
  const { email } = req.user;

  try {
    const { type, message } = await postService.update(updatedPost, id, email);
    if (type) return res.status(UNAUTHORIZED).json({ message });
    return res.status(OK).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  create, 
  findAll, 
  findById,
  update,
};