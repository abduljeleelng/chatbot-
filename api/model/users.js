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



/**
const Sequelize = require("sequelize");
const sequelize = new Sequelize("chatbot","root","",{
    host:"localhost",
    dialect :"mysql",
    pool:{
        max:5,
        min:0,
        idle:10000
    },
    //SQLite only 
    //storage :"path/to/database.sqlite"
});
//or you can cal the connection uri
//const sequelize = new Sequelize("postgress://user:.....")
const User = sequelize.define("user",{
    name:{
        type:Sequelize.STRING,

    },
    phone:{
        type:Sequelize.STRING,

    },
    email:{
        type:Sequelize.STRING
    }
},{
    freezeTableName: true //Model TableName("user")
});
*/
