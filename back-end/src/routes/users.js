const router = require('express').Router();
const controller = require('../controllers/users');

// GET /users
router.route('/').get(controller.get);

// GET PUT DELETE /users/:id
router
  .route('/user')
  .get(controller.getById)
  .put(controller.put)
  .delete(controller.delete);

// POST to /users
router.route('/create').post(controller.post,);

// GET users notes
router.route('/user/notes').get(controller.getNotes);

// GET all users classes

router.route('/user/classes').get(controller.getClasses);

// GET users likes

router.route('/user/likes').get(controller.getLikes);

router.route('/user/add-class').post(controller.addClass);
router.route('/user/delete-class').delete(controller.deleteClass);

module.exports = router;
