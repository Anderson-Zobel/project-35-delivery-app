const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../../database/models');
const { genToken } = require('./jwtService');

const hashPassword = (password) => md5(password);

const loginService = async (email, userPassword) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  const hashedPassword = hashPassword(userPassword);
  if (user.password !== hashedPassword) return null;
  const { password, ...userData } = user.dataValues;
  const token = genToken(userData);
  return {
    ...userData,
    token,
  };
};

const getUsers = async () => {
  const users = await User.findAll({ where: { role: { [Op.not]: 'administrator' } } });
  return users;
};

const createUser = async (name, email, userPassword, role) => {
  const userExist = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  
  if (!userExist) {
    const password = hashPassword(userPassword);
    const createdUser = await User.create({ name, email, password, role });
    return createdUser;
  }

  return null;
};

const findSellers = async () => User.findAll({
  where: { role: 'seller' }, attributes: { exclude: ['password'] },
});

const findUserId = async (email) => User.findOne({
  where: { email },
});

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  loginService,
  createUser,
  findSellers,
  findUserId,
  getUsers,
  deleteUser,
};
