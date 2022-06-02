const errorMiddleware = (_req, res, _next) => {
  return res.status(500).json({ message: 'Sorry, something went wrong' });
}

module.exports = errorMiddleware;