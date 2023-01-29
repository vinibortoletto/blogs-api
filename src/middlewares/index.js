const validateLogin = require('./validateLogin');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const validateCategory = require('./validateCategory');
const validateNewPost = require('./validateNewPost');
const validateUpdatedPost = require('./validateUpdatedPost');

module.exports = {
  validateLogin,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateToken,
  validateCategory,
  validateNewPost,
  validateUpdatedPost,
};
