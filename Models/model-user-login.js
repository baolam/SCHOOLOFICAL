const express = require("express");
const UserLogin = require("../Controllers/controller-user-login");
const Router = express.Router();

Router.get("/login", UserLogin.GET_LOGIN);
Router.post("/login", UserLogin.POST_LOGIN);

module.exports = Router;