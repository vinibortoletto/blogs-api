const { User } = require('../models');
const { userService } = require('../services');
const jwt = require('../utils');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.login(email, password);
  if (type) return res.status(400).json({ message });

  const token = jwt.sign({ email, password });
  res.status(200).json({ token });
};

const create = async (req, res) => {
  const newUser = req.body;

  await User.create(newUser);

  const token = jwt.sign(newUser);
  res.status(201).json({ token });
};

module.exports = { login, create };