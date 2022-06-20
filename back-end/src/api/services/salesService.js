const { Sale, SaleProduct, Product, User } = require('../../database/models');
const { findUserId } = require('./userService');

const createSaleProduct = async (products, order) => {
  const { id } = order.order.dataValues;
  const promises = await products.map(async (product) => {
    await SaleProduct.create({
      saleId: id,
      productId: product.id,
      quantity: product.count,
    });
  });
  Promise.all(promises);
};

const createOrder = async (payload) => {
  const { email, cart, ...saleInfo } = payload;
  const user = await findUserId(email);
  const userId = user.dataValues.id;
  if (!userId) return null;
  const order = await Sale.create({
    userId,
    ...saleInfo,
    products: cart,
  });

  return { order };
};

const getSaleById = async (saleId) => {
  const sale = await Sale
    .findOne({
      where: { id: saleId },
      include: [{ model: Product, as: 'products', attributes: { exclude: ['urlImage'] } },
      { model: User, as: 'seller', attributes: { exclude: 'password' } },
      ],
    });
  return sale;
};

const getSaleByUserId = async (userId) => {
  const sales = await Sale.findAll({
    where: { userId },

  });
  if (sales.length === 0) return null;
  return sales;
};

const getSaleBySellerId = async (sellerId) => {
  const sales = await Sale.findAll({
    where: { sellerId },
  });
  if (sales.length === 0) return null;
  return sales;
};

const updateSaleStatus = async (saleId, saleStatus) => {
  const sale = await Sale.findOne({ where: { id: saleId } });
  if (!sale) return null;
  await Sale.update({ status: saleStatus }, { where: { id: saleId } });
  const updatedSale = await Sale.findOne({ where: { id: saleId } });
  return updatedSale;
};

module.exports = {
  createOrder,
  createSaleProduct,
  getSaleById,
  getSaleByUserId,
  getSaleBySellerId,
  updateSaleStatus,
};