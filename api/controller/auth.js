const jwt = require('jsonwebtoken');
require('dotenv').config();
const expressJwt = require('express-jwt');
const User = require('../model/users');
const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');
const salt = uuidv1();
exports.SignUp = (req,res)=>{
    User.sync()
    .then(()=> User.create({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salt:salt,
        sex:req.body.sex,
        password: bcrypt.hashSync(req.body.password,10)
    }))
    .then(user=>{
    console.log("Data Inserted");
    res.json(user.toJSON());
    })
};
exports.SignIn = async (req,res, next)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(user=>{
        if(!user){
           return res.status(400).res.json({"message":"email don't exist, please sign up !"});
        }
        const validate =bcrypt.compareSync(req.body.password,user.password);
        if(!validate){ return res.status(400).res.json({"message":"password not coreect"})}
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:86400});
        user.salt=undefined;
        user.password=undefined;
        //set token to the cookies
        res.cookie("t",token,{expre:new Date()+60})
        return res.status(200).json({user,toke:token})
    }).catch(err=>{res.status(500).res.json({message:err.message})})
};
exports.signout=(req,res)=>{
    res.clearCookie("t");
    return res.json({message:"Sign out successfully"});
};
exports.requireSign = expressJwt({
    secret: process.env.JWT_SECRET,
    //userProperty: "auth"
});
