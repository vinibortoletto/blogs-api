const { userService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await userService.login(email, password);
  if (type) return res.status(400).json({ message });

  res.status(200).json({ token: message });
};

const create = async (req, res) => {
  const newUser = req.body;

  try {
    const { type, message } = await userService.create(newUser);
    if (type) return res.status(409).json({ message });
    return res.status(201).json({ token: message });
  } catch (error) {
    return res.status(500).json('Internal Service Error');
  }
};

module.exports = { login, create };