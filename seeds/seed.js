const sequelize = require('../config/connection');
const { User, twit } = require('../models');

const userData = require('./userData.json');
const twitData = require('./twitData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  for (const twit of twitData) {
    await twit.create({
      ...twit,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
