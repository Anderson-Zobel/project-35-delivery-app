const { Router } =  require('express');
const loginMiddleware = require('../middlewares/loginMiddleware');
const loginController = require('../controller/userController');

const login = Router()

login.post(
  '/login',
  loginMiddleware,
  loginController,
)

module.exports = login;