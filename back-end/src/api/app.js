const express = require('express');
// multer
const LoginService = require('./services/loginService');

const loginRoute = new LoginService();

const app = express();

app.get('/login',
loginRoute.getUser,
(_req, res) => res.status(418).end());


module.exports = app;
