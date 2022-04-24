const router = require('express').Router();
const controller = require('../controllers/notes');

router.route('/').get(controller.get);

router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

router.route('/create').post(controller.post);

router.route('/:id/comment').post(controller.comment);
router.route('/:id/comments').get(controller.getComments);

router.route('/:id/like').put(controller.like);

module.exports = router;
