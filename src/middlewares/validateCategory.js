const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCodes');

const schema = Joi.string().required();

module.exports = (req, res, next) => {
  const { name } = req.body;
  const { error } = schema.validate(name);
  const message = '"name" is required';
  
  if (error) return res.status(BAD_REQUEST).json({ message });
  next();
};
