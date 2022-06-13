const { Router } = require('express');
const credentialsValidate = require('../middlewares/credentialsValidate');
const nameValidate = require('../middlewares/nameValidate');
const userController = require('../controller/userController');

const user = Router();

user.post(
  '/login',
  credentialsValidate,
  userController.login,
);

user.post(
  '/register',
  nameValidate,
  credentialsValidate,
  userController.create,
);

user.get('/seller',
  userController.getSellers);

module.exports = user;