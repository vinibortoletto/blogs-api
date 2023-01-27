const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCodes');

const schema = Joi.string().email().required();

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const { error } = schema.validate(email);

  if (error) {
    return res.status(BAD_REQUEST).json({ message: '"email" must be a valid email' });
  }

  next();
};
