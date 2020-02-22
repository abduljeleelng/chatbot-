("use strict");
const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Model = Sequelize.Model;
class Account extends Model {}
Account.init({
  userId: {
        type: Sequelize.INTEGER,
        allowNull: false
   },
  accountnumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pin: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  security:{
      type:Sequelize.STRING
  },
}, 
{
  sequelize,
  modelName: 'Account'
  // options
});

module.exports = Account;