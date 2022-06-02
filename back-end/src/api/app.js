const express = require('express');
const errorMiddleware = require('../api/middlewares/error')
const loginRoute = require('./routes/userRoutes');
require('express-async-errors');
// multer

const app = express();

app.use(express.json());

app.use('/', loginRoute);

app.use(errorMiddleware);


module.exports = app;
