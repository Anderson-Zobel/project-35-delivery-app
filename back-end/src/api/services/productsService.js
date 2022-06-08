const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  if (!products) { 
    return null;
  }
  return products;
}

module.exports = { 
  getAllProducts,
}