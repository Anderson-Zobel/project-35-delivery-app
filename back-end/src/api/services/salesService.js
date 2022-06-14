const { Sale } = require('../../database/models');
const { SaleProduct } = require('../../database/models');
const { findUserId } = require('./userService');

const createOrder = async (payload) => {
  const { email, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, cart } = payload;
  const user = await findUserId(email);
  const userId = user.dataValues.id;
  console.log(userId);
  if (!userId) return null;
  const order = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    // salesProducts: cart.map((product) => [{ productId: product.id, quantity: product.count }]),
  });
  console.log(order.id);
  const salesProduct = cart.map((product) =>
    SaleProduct.create({ saleID: order.id, productId: product.id, quantity: product.count }));
  Promise.all(salesProduct).then(salesProduct);
  return order;
};

module.exports = {
  createOrder,
};