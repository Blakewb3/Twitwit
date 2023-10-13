const router = require('express').Router();
const messageRoutes = require('./message-routes');
const twitRoutes = require('./twit-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes'); 

router.use('/messages', messageRoutes);
router.use('/twits', twitRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;