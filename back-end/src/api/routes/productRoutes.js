const { Router } = require('express');
const productController = require('../controller/productController');

const product = Router();

product.get(
  '/products',
  productController.getProducts,
);

module.exports = product;