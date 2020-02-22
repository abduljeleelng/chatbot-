const Transaction = require("../model/transaction");

exports.readAll = (req, res) =>{
      transaction.findAll().then(data => {
    console.log("All account:", JSON.stringify(data, null, 4));
    res.json({transaction:data});
   });
};
exports.create = (req, res) =>{
    Transaction.sync()
    .then(()=> Transaction.create(req.body))
    .then(data=>{
    console.log("Data Inserted");
    res.json(data.toJSON());
    })
};
exports.deleteAccount = (req,res)=>{
    Transaction.destroy({
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
        Transaction.update(req.body, {
    where: {
        id: req.body.id
    }
    }).then(() => {
    console.log("Done");
    res.json({"message":"updated"})
    });
};
