const express = require("express");
const {registerValidations, loginValidations} = require("../validations/AuthValidations");
const {register, login} = require("../controller/UserController");


const route = express.Router();

route.post("/login", loginValidations, login);
route.post("/register", registerValidations, register);


module.exports = route;


