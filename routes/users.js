const express = require("express");
const users = express.Router();
const { createUser } = require("../controllers/users.controller");

users.post("/register", createUser);

module.exports = users;
