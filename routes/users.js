const express = require("express");
const users = express.Router();
const { createUser } = require("../controllers/users.controller");
const { validateUser } = require("../validators/user.validator");

//users.post("/register", [...validateUser, ...validateBook, validateResult], createUser);
users.post("/register", validateUser, createUser);
module.exports = users;
