const express = require("express");

const admin = require("../Controllers/controller-admin");
const Router = express.Router();

Router.get("/home", admin.GET_HOME);
Router.get("/user/:id", admin.TABLE_USER);
Router.get("/login", admin.GET_LOGIN);
Router.post("/login", admin.POST_LOGIN);
Router.get("/", admin.REDIRECT);

module.exports = Router;