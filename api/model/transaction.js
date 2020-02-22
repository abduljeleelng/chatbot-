("use strict");
const Sequelize = require('sequelize');
const sequelize = require("../config/db");

const Model = Sequelize.Model;
class Transaction extends Model {}
Transaction.init({
  senderId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  recieverId: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  amount:{
      type:Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'Transaction'
  // options
});

module.exports = Transaction;