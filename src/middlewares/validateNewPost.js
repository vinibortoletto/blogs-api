const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCodes');

const textSchema = Joi.string().required();

const newPostSchema = Joi.object({
  title: textSchema,
  content: textSchema,
  categoryIds: Joi.array().items(Joi.number()).required(),
});

module.exports = (req, res, next) => {
  const { error } = newPostSchema.validate(req.body);

  if (error) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }

  next();
};