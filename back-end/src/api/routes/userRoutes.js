const { Router } = require('express');
const credentialsValidate = require('../middlewares/credentialsValidate');
const nameValidate = require('../middlewares/nameValidate');
const { tokenValidator } = require('../middlewares/jwtMiddleware');

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

user.post(
  '/admin/register',
  tokenValidator,
  nameValidate,
  credentialsValidate,
  userController.adminCreateUser,
);

user.delete(
  '/admin/remove/:id',
  tokenValidator,
  userController.remove,
);

user.get('/seller',
  userController.getSellers);

user.get(
  '/users',
  userController.getAllUsers,
);

module.exports = user;