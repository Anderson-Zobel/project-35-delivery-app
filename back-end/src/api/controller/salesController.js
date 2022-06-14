const { createOrder, createSaleProduct } = require('../services/salesService');

const newOrder = async (req, res) => {
  const { body } = req;

  const order = await createOrder(body);

  await createSaleProduct(body.cart, order);

  return res.status(201).json(order);
};

module.exports = {
  newOrder,
};