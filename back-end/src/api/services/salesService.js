const { Sale, SaleProduct, Product, User } = require('../../database/models');
const { findUserId } = require('./userService');

const createSaleProduct = async (products, order) => {
  console.log(order.order.dataValues.id);
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
  const sales = await Sale.findAll({ where: { userId } });
  return sales;
};
module.exports = {
  createOrder,
  createSaleProduct,
  getSaleById,
  getSaleByUserId,
};