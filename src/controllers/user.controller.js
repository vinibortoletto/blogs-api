const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.login(email, password);
  if (type) return res.status(400).json({ message });

  const token = jwt.sign({ email, password }, JWT_SECRET);
  res.status(200).json({ token });
};

module.exports = { login };