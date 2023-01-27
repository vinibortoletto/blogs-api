const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (user) => jwt.sign(user, JWT_SECRET);
