const { User } = require('../models');
const jwt = require('../utils');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return { type: 'INVALID_FIELD', message: 'Invalid fields' };
  }

  const token = jwt.sign({ email, password });
  return { type: null, message: token };
};

module.exports = { login };