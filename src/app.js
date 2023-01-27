const express = require('express');
// ...
const { userController } = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());
app.post('/login', userController.login);
app.post(
  '/user',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.create,
);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
