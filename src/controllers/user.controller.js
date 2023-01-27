const { userService } = require('../services');
const { BAD_REQUEST, CONFLICT, CREATED, OK } = require('../utils/statusCodes');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const { type, message } = await userService.login(email, password);
    if (type) return res.status(BAD_REQUEST).json({ message });
    res.status(200).json({ token: message });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const newUser = req.body;

  try {
    const { type, message } = await userService.create(newUser);
    if (type) return res.status(CONFLICT).json({ message });
    return res.status(CREATED).json({ token: message });
  } catch (error) {
    next(error);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const { message } = await userService.findAll();
    return res.status(OK).json(message);
  } catch (error) {
    next(error);
 }
};

module.exports = { login, create, findAll };