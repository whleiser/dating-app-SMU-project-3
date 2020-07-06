'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");

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
    email: DataTypes.STRING,
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
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  User.belongsToMany(User, { as: 'Children', through: 'Matches' });
  return User;
};
