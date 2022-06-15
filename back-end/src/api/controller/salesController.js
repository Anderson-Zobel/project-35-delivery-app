const { createOrder,
  createSaleProduct,
  getSaleById,
  getSaleByUserId,
  getSaleBySellerId,
  updateSaleStatus } = require('../services/salesService');

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

const findSalesByUserId = async (req, res) => {
  const { id } = req.params;
  const sales = await getSaleByUserId(+id);
  if (!sales) {
    return res.status(404).json({ message: 'Sales not found' });
  }
  return res.status(201).json({ sales });
};

const findSalesBySellerId = async (req, res) => {
  const { id } = req.params;
  const sales = await getSaleBySellerId(+id);
  if (!sales) {
    return res.status(404).json({ message: 'Sales not found' });
  }
  return res.status(201).json({ sales });
};

const updateSaleStatusById = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const sale = await updateSaleStatus(+id, status);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json({ sale });
};

module.exports = {
  newOrder,
  findSaleById,
  findSalesByUserId,
  findSalesBySellerId,
  updateSaleStatusById,
};