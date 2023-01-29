const express = require('express');
const middlewares = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.post(
  '/', 
  middlewares.validateToken,
  middlewares.validateNewPost,
  postController.create,
);

router.get(
  '/', 
  middlewares.validateToken,
  postController.findAll,
);

module.exports = router;
