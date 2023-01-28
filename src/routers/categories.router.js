const express = require('express');
const middlewares = require('../middlewares');
const { categoryController } = require('../controllers');

const router = express.Router();

router.post(
  '/', 
  middlewares.validateToken,
  middlewares.validateCategory,
  categoryController.create,
);

router.get(
  '/', 
  middlewares.validateToken,
  categoryController.findAll,
);

module.exports = router;
