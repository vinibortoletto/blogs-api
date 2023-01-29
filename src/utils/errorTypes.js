const { CONFLICT, BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } = require('./statusCodes');

module.exports = {
  USER_ALREADY_EXISTS: CONFLICT,
  INVALID_FIELD: BAD_REQUEST,
  CATEGORY_NOT_FOUND: BAD_REQUEST,
  USER_NOT_FOUND: NOT_FOUND,
  POST_NOT_FOUND: NOT_FOUND,
  UNAUTHORIZED_USER: UNAUTHORIZED,
};