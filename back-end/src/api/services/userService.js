const md5 = require('md5');
const { User } = require('../../database/models');
const { genToken } = require('./jwtService');

const hashPassword = (password) => md5(password);

const loginService = async (email, userPassword) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  const hashedPassword = hashPassword(userPassword);
  if (user.password !== hashedPassword) return null;
  const { password, id, ...userData } = user.dataValues;
  const token = genToken(userData);
  return {
    ...userData,
    token,
  };
};

const createUser = async (name, email, userPassword, role) => {
  const userExist = await User.findOne({ where: { name, email } });
  if (!userExist) {
    const password = hashPassword(userPassword);
    const createdUser = await User.create({ name, email, password, role });
    return createdUser;
  }
  return null;
};

module.exports = {
  loginService,
  createUser,
};