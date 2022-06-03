const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const JWT_CONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const genToken = (payload) => jwt.sign(payload, SECRET, JWT_CONFIG);

const validateToken = (token) => {
  try {
    return jwt.verify(token, SECRET, JWT_CONFIG);
  } catch (e) {
    return false;
  }
};

module.exports = {
  genToken,
  validateToken,
};
