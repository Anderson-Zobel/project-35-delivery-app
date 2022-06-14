const { Router } = require('express');
const saleController = require('../controller/salesController');

const sale = Router();

sale.post('/order', saleController.newOrder);

module.exports = sale;