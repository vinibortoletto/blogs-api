const Joi = require('joi');

const schema = Joi.string().min(6).required();

module.exports = (req, res, next) => {
  const { password } = req.body;
  const { error } = schema.validate(password);
  const message = '"password" length must be at least 6 characters long';

  if (error) return res.status(400).json({ message });
  next();
};
