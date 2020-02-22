const express = require('express');
const router = express.Router();

const {readAll, create, deleteAccount, updateAccount } = require("../controller/account");

router.get("/account/readAll", readAll);
router.post("/account/create", create);
router.delete("/account/delete", deleteAccount);
router.put("/account/update", updateAccount);

module.exports = router;