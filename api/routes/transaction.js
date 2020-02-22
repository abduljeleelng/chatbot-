const express = require('express');
const router = express.Router();

const {readAll, create, deleteAccount, updateAccount } = require("../controller/transaction");

router.get("/transaction/readAll", readAll);
router.post("/transaction/create", create);
router.delete("/transaction/delete", deleteAccount);
router.put("/transaction/update", updateAccount);

module.exports = router;