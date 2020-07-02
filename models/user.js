'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bio: DataTypes.STRING,
    hobbiesInterests: DataTypes.STRING,
    male: DataTypes.BOOLEAN,
    female: DataTypes.BOOLEAN,
    interestMale: DataTypes.BOOLEAN,
    interestFemale: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  User.belongsToMany(User, { as: 'Children', through: 'Matches' });
  return User;
};
