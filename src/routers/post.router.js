const express = require('express');
const middlewares = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();

router.get(
  '/search', 
  middlewares.validateToken,
  postController.search,
);

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

router.delete(
  '/:id', 
  middlewares.validateToken,
  postController.remove,
);

module.exports = router;
