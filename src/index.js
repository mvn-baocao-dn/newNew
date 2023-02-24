const express = require('express');
const morgan = require('morgan');
const tourRouter = require('../src/routes/tour');
const app = express();
app.use(morgan('dev'));
app.use(express.json());


// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next();
// });

// 3) ROUTES

app.use('/api/v1/tours', tourRouter);

module.exports = app;