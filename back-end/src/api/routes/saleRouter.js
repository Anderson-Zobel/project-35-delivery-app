const { Router } = require('express');
const saleController = require('../controller/salesController');
const { tokenValidator } = require('../middlewares/jwtMiddleware');

const sale = Router();

sale.post('/order', tokenValidator, saleController.newOrder);
sale.get('/order/:id', saleController.findSaleById);
sale.get('/order/customer/:id', tokenValidator, saleController.findSalesByUserId);
sale.get('/order/seller/:id', tokenValidator, saleController.findSalesBySellerId);
sale.patch('/order/:id', saleController.updateSaleStatusById);

module.exports = sale;
