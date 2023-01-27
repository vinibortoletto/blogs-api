const { BAD_REQUEST } = require('../utils/statusCodes');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }

  next();
};
