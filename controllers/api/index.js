const router = require('express').Router();
const userRoutes = require('./userRoutes');
const twitRoutes = require('./twitRoutes');

router.use('/users', userRoutes);
router.use('/twits', twitRoutes);

module.exports = router;