//const Sequelize = require("sequelize")
const User = require("../model/users");

exports.Verifying = (req,res,next)=>{
    User.findOne({
        where: {
          phone: req.body.phone
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Phone Number is already in use!"
          });
          return;
        }
    // Email
    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
        next();
      });
    });
}