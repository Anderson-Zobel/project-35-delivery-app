const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const { userRoutes, productRoutes } = require('./routes/index');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('/', userRoutes);
app.use('/', productRoutes);

app.use(errorMiddleware);

module.exports = app;
