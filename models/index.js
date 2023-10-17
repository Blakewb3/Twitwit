const User = require('./User');
const twit = require('./twit');

User.hasMany(twit, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

twit.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, twit };

