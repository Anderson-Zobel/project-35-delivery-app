const { Router } = require('express');
const saleController = require('../controller/salesController');

const sale = Router();

sale.post('/order', saleController.newOrder);
sale.get('/order/:id', saleController.findSaleById);

module.exports = sale;