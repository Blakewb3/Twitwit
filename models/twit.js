const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Twit extends Model {}

Twit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
        type: DataTypes.STRING, //how to pull in username automatically from login/sign up info?
        allowNull: false,
        defaultValue: 'DefaultUserName',
      },
    twit_content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'twit',
  }
);

module.exports = Twit;