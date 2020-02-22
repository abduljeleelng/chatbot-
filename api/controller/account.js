const Account = require("../model/account");

exports.readAll = (req, res) =>{
      Account.findAll().then(account => {
    console.log("All account:", JSON.stringify(account, null, 4));
    res.json({account:account});
   });
};
exports.create = (req, res) =>{
    Account.sync()
    .then(()=> Account.create(req.body))
    .then(account=>{
    console.log("Data Inserted");
    res.json(account.toJSON());
    })
};
exports.deleteAccount = (req,res)=>{
    Account.destroy({
        where: {
            id: req.body.id
            //id:req.params
        }
        }).then(() => {
        console.log("Done");
        res.json({"message":"deleted"})
    });
};
exports.updateAccount = (req,res)=>{
        Account.update(req.body, {
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
