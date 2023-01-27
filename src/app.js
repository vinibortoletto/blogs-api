const express = require('express');
const { userController } = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middlewares.validateLogin, userController.login);

app.post(
  '/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.create,
);

module.exports = app;
