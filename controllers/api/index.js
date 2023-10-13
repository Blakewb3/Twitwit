const router = require('express').Router();

const userRoutes = require('./user-routes');
const twitRoutes = require('./twit-routes.js');

router.use('/users', userRoutes);
router.use('/twit', twitRoutes);

module.exports = router;