const User = require("../model/users");

exports.readAll = (req, res) =>{
      User.findAll().then(user => {
    console.log("All users:", JSON.stringify(user, null, 4));
    res.json({users:user});
   });
};
exports.create = (req, res) =>{
    User.sync()
    .then(()=> User.create(req.body))
    .then(user=>{
    console.log("Data Inserted");
    res.json(user.toJSON());
    })
};
exports.deleteUser = (req,res)=>{
    User.destroy({
        where: {
            id: req.body.id
        }
        }).then(() => {
        console.log("Done");
        res.json({"message":"deleted"})
    });
};
exports.updateUser = (req,res)=>{
        User.update(req.body, {
    where: {
        id: req.body.id
    }
    }).then(() => {
    console.log("Done");
    res.json({"message":"updated"})
    });
};

const create =()=>{
    sequelize.sync()
    .then(() => User.create({
       username: 'janedoe',
       birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
         console.log(jane.toJSON());
    });
}
