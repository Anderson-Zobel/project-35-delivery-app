const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error');
const loginRoute = require('./routes/userRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', loginRoute);

app.use(errorMiddleware);

module.exports = app;
