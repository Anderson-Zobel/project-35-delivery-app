const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const loginRoute = require('./routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/', loginRoute);

app.use(errorMiddleware);

module.exports = app;
