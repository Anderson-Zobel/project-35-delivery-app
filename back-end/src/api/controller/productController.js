const { getAllProducts } = require('../services/productsService');

const getProducts = async (req, res) => {
  const products = await getAllProducts();

  if (!products) {
    return res.status(404).send('Products not found');
  }

  return res.status(200).json(products);
};

module.exports = { 
  getProducts,
};