const express = require('express');
const router = express.Router();

const {readAll, create, deleteUser, updateUser } = require("../controller/users");

router.get("/users/readAll", readAll);
router.post("/users/create", create);
router.delete("/users/delete", deleteUser);
router.put("/users/update", updateUser);

module.exports = router;
