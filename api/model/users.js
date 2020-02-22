("use strict");
const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  email:{
      type:Sequelize.STRING
  },
  password:{
    type:Sequelize.STRING
  },
  sex:{
      type:Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'user'
  // options
});

module.exports = User;

