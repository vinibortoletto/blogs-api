const express = require('express');
const middlewares = require('../middlewares');
const { userController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  userController.create,
);

router.get(
  '/', 
  middlewares.validateToken, 
  userController.findAll,
);

router.get(
  '/:id', 
  middlewares.validateToken, 
  userController.findById,
);

router.delete(
  '/me', 
  middlewares.validateToken, 
  userController.remove,
);

module.exports = router;
