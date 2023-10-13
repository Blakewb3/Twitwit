const router = require('express').Router();

const userRoutes = require('./userRoutes');
const twitRoutes = require('./twit-routes.js');

router.use('/users', userRoutes);
router.use('/twit', twitRoutes);

module.exports = router;