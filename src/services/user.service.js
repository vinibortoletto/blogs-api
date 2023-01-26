const { User } = require('../models');

const login = async (email, password) => {
  if (!email || !password) {
    return { type: 'REQUIRED_FIELD', message: 'Some required fields are missing' };
  }

  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    return { type: 'INVALID_FIELD', message: 'Invalid fields' };
  }

  return { type: null, message: '' };
};

module.exports = { login };