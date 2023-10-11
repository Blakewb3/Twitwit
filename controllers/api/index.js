const router = require('express').Router();

const twitRoutes = require('./twit-routes.js');

router.use('/twit', twitRoutes);

module.exports = router;