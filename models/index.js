const User = require('./user');
const Twit = require('./twit');
const Message = require('./message');
const Comment = require('./comment');

// Create associations
User.hasMany(Twit, {
  foreignKey: 'user_id',
});

Twit.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Message, {
  foreignKey: 'sender_id',
  onDelete: 'CASCADE',
});

User.hasMany(Message, {
  foreignKey: 'receiver_id',
  onDelete: 'CASCADE',
});

Message.belongsTo(User, {
  foreignKey: 'sender_id',
  as: 'sender',
});

Message.belongsTo(User, {
  foreignKey: 'receiver_id',
  as: 'receiver',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Twit.hasMany(Comment, {
  foreignKey: 'twit_id',
  onDelete: 'CASCADE',
});

Message.hasOne(Comment, {
  foreignKey: 'message_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Twit, {
  foreignKey: 'twit_id',
});

Comment.belongsTo(Message, {
  foreignKey: 'message_id',
});

module.exports = { User, Twit, Message, Comment };

