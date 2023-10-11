const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Add a foreign key constraint to reference the User model for the sender
      references: {
        model: 'User',
        key: 'id',
      },
    },
    receiverId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Add a foreign key constraint to reference the User model for the receiver
      references: {
        model: 'User',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attachments: {
      type: DataTypes.STRING, // Use STRING to store file paths or URLs
      allowNull: true, // Set to true if attachments are optional
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'Message',
  }
);

module.exports = Message;
