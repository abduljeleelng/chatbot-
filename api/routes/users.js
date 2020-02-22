const express = require('express');
const router = express.Router();

const {SignUp,SignIn} = require("../controller/auth");
const {Verifying} = require("../config/auth");

const {readAll, create, deleteUser, updateUser } = require("../controller/users");

router.get("/users/readAll", readAll);
router.post("/users/create", create);
router.post("/users/signup", Verifying,  SignUp);
router.post("/users/signin", SignIn);
router.delete("/users/delete", deleteUser);
router.put("/users/update", updateUser);

module.exports = router;
