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

module.exports = router;
