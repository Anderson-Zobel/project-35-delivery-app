const { validateToken } = require('../services/jwtService');

const tokenValidator = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decode = validateToken(authorization);
  if (!decode) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

module.exports = {
  tokenValidator,
};