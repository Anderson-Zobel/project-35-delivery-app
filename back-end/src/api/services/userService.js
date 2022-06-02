 const { User } = require('../../database/models');
 const { genToken } = require('./jwtService');
 const md5 = require('md5');

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
  }
}
module.exports = loginService;
