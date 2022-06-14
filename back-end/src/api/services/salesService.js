const { Sale, SaleProduct } = require('../../database/models');
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
  // await createSaleProduct(cart, order.id);

  return { order };
};

module.exports = {
  createOrder,
  createSaleProduct,
};