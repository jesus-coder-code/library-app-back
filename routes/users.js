const express = require("express");
const users = express.Router();
const { createUser, loginUser } = require("../controllers/users.controller");
const { validateUser } = require("../middlewares/validators/user.validator");

//users.post("/register", [...validateUser, ...validateBook, validateResult], createUser);
users.post("/register", validateUser, createUser);
users.post("/login", loginUser);

module.exports = users;
