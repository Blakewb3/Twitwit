const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user', // References the 'user' model for the user_id foreign key
        key: 'id',     // Refers to the 'id' column in the 'user' model
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post', // References the 'post' model for the post_id foreign key
        key: 'id',     // Refers to the 'id' column in the 'post' model
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, 
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
    modelName: 'comment', 
  }
);

module.exports = Comment;
