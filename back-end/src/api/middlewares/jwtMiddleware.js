const { validateToken } = require('../services/jwtService');

const tokenValidator = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const decoded = validateToken(authorization);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  req.user = decoded;
  next();
};

module.exports = {
  tokenValidator,
};