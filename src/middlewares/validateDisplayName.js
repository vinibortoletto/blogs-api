const Joi = require('joi');

const schema = Joi.string().min(8).required();

module.exports = (req, res, next) => {
  const { displayName } = req.body;
  const { error } = schema.validate(displayName);
  const message = '"displayName" length must be at least 8 characters long';
  
  if (error) return res.status(400).json({ message });
  next();
};
