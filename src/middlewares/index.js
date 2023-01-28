const validateLogin = require('./validateLogin');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validateNewPost = require('./validateNewPost');

module.exports = {
  validateLogin,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateToken,
  validateCategory,
  validateNewPost,
};
