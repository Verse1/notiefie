const router = require('express').Router();

router.use('/classes', require('./classes'));
router.use('/profile', require('./profile'));

module.exports = router;
