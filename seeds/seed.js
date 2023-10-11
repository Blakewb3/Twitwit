const sequelize = require('../config/connection');
const { User, PostTwit, Comment, Message } = require('../models');

const userData = require('./userData.json');
const postTwitData = require('./postTwitData.json');
const commentsData = require('./commentsData.json');
const messagesData = require('./messagesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const postTwits = await PostTwit.bulkCreate(postTwitData);

  const messages = await Message.bulkCreate(messagesData);

  for (const comment of commentsData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      postTwit_id: postTwits[Math.floor(Math.random() * postTwits.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

