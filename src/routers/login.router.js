const express = require('express');
const middlewares = require('../middlewares');
const { userController } = require('../controllers');

const router = express.Router();

router.post(
  '/', 
  middlewares.validateLogin,
  userController.login,
);

module.exports = router;
