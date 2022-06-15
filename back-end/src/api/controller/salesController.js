const { createOrder, createSaleProduct, getSaleById } = require('../services/salesService');

const newOrder = async (req, res) => {
  const { body } = req;

  const order = await createOrder(body);

  await createSaleProduct(body.cart, order);

  return res.status(201).json(order);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await getSaleById(+id);
  return res.status(201).json(sale);
};

module.exports = {
  newOrder,
  findSaleById,
};