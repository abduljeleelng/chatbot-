("use strict");
const Sequelize = require('sequelize');
const sequelize = require("../config/db");
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');
const bcrypt = require('bcrypt');

//require('sequelize-isunique-validator')(Sequelize)

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  email:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true,
      validate: {
        isEmail: {
          msg: 'Email required .'
        }
      }
  },
  salt:{
      type:Sequelize.STRING
  },
  password:{
      type:Sequelize.STRING,
      allowNull:false
  },
  sex:{
      type:Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'user',
  instanceMethods: {
    generateHash: function (password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(this.salt=uuidv1()), null)
    },
    validPassword: function (password) {
      return bcrypt.compareSync(password, this.password)
    }
  }
  // options
});
/*
bcrypt.genSalt(this.salt=uuidv1(), function(err, salt) {
    if(err){console.log(err)}
    bcrypt.hash("mypass", salt, function(err, hash) {
        if(err){console.log(err)}
        console.log(hash);
        this.hashed_password = hash

        // Store hash in your password DB.
    });
});
*/


/*///generating Virtual Password and Salt it
User.virtual('password')
    .set(function (password) {
        //create temporary password
        this._password=password;
        ///generate timestamp
        this.salt=uuidv1();
        this.hashed_password=this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    });

User.methods ={
    authenticate:function(plainText){
        return this.encryptPassword(plainText)===this.hashed_password;
    },
    encryptPassword:function (password) {
        if (!password) return "";
        try {
           return crypto
               .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        }
        catch (error) {
            return ""
        }
    }
};
*/
module.exports = User;

