const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCodes');

const schema = Joi.string().min(6).required();

module.exports = (req, res, next) => {
  const { password } = req.body;
  const { error } = schema.validate(password);
  const message = '"password" length must be at least 6 characters long';

  if (error) return res.status(BAD_REQUEST).json({ message });
  next();
};
