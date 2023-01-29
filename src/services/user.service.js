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

const create = async (newUser) => {
  const { email } = newUser;
  const user = await User.findOne({ where: { email } });
  
  if (user) {
    return { type: 'CONFLICT', message: 'User already registered' };
  }

  await User.create(newUser);
  const token = jwt.sign(newUser);
  return { type: null, message: token };
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { type: null, message: users };
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  
  if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };
  return { type: null, message: user };
};

const remove = async ({ email }) => User.destroy({ where: { email } });

module.exports = { 
  login,
  create,
  findAll,
  findById,
  remove,
};