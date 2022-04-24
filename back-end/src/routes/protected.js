const router = require('express').Router();
const controller = require('../controllers/protected');

router.route('/').get(controller.get);

module.exports = router;
