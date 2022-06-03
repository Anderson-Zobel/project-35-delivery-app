const errorMiddleware = (_req, res, _next) => res
  .status(500).json({ message: 'Sorry, something went wrong' });

module.exports = errorMiddleware;