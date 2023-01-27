const { userService } = require('../services');
const { BAD_REQUEST, CONFLICT, CREATED, INTERNAL_SERVER_ERROR } = require('../utils/statusCodes');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.login(email, password);
  if (type) return res.status(BAD_REQUEST).json({ message });

  res.status(200).json({ token: message });
};

const create = async (req, res) => {
  const newUser = req.body;

  try {
    const { type, message } = await userService.create(newUser);
    if (type) return res.status(CONFLICT).json({ message });
    return res.status(CREATED).json({ token: message });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json('Internal Service Error');
  }
};

module.exports = { login, create };