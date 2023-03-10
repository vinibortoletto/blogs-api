const { postService } = require('../services');
const errorTypes = require('../utils/errorTypes');
const { CREATED, OK, NO_CONTENT } = require('../utils/statusCodes');

const create = async (req, res, next) => {
  const { email } = req.user;
  const newPost = req.body;

  try {
    const { type, message } = await postService.create(newPost, email);
    if (type) return res.status(errorTypes[type]).json({ message });
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
    if (type) return res.status([errorTypes[type]]).json({ message });
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
    if (type) return res.status(errorTypes[type]).json({ message });
    return res.status(OK).json(message);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  const { email } = req.user;
  
  try {
    const { type, message } = await postService.remove(id, email);
    if (type) return res.status(errorTypes[type]).json({ message });
    return res.status(NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};

const search = async (req, res, next) => {
    const { q: searchTerm } = req.query;

    try {
      const { type, message } = await postService.search(searchTerm);
      if (type) return res.status(errorTypes[type]).json({ message });
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
  remove,
  search,
};