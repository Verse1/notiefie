const router = require('express').Router();
const controller = require('../controllers/users');

// GET /users
router.route('/').get(controller.get);

// GET PUT DELETE /users/:id
router
  .route('/:id')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

// POST to /users
router.route('/:id').post(controller.post);

// GET users notes
router.route('/:id/notes').get(controller.getNotes);

// GET all users classes

router.route('/:id/classes').get(controller.getClasses);

// GET users likes

router.route('/:id/likes').get(controller.getLikes);

// POST and DELETE users classes
router.route('/:id/add-class').post(controller.addClass);
router.route('/:id/delete-class').delete(controller.deleteClass);

module.exports = router;
