const Joi = require('joi');
const { User } = require('../models');

const schema = Joi.string().email().required();

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const { error } = schema.validate(email);

  if (error) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await User.findOne({ where: { email } });
  
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};
