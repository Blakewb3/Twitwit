const router = require('express').Router();
const userRoutes = require('./user-routes');
const twitRoutes = require('./twit-routes');

router.use('/users', userRoutes);
router.use('/twits', twitRoutes);

module.exports = router;