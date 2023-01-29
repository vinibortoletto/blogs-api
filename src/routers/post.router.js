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

router.get(
  '/:id', 
  middlewares.validateToken,
  postController.findById,
);

router.put(
  '/:id', 
  middlewares.validateToken,
  middlewares.validateUpdatedPost,
  postController.update,
);

module.exports = router;
