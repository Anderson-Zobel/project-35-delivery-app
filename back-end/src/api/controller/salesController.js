const { createOrder } = require('../services/salesService');

const newOrder = async (req, res) => {
  const { body } = req;

  const order = await createOrder(body);

  return res.status(201).json(order);
};

module.exports = {
  newOrder,
};