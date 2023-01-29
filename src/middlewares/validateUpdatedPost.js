const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCodes');

const textSchema = Joi.string().required();

const updatedPostSchema = Joi.object({
  title: textSchema,
  content: textSchema,
});

module.exports = (req, res, next) => {
  const { error } = updatedPostSchema.validate(req.body);

  if (error) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }

  next();
};