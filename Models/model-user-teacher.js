const express = require("express");
const teacher = require("../Controllers/controller-user-teacher");

const Router = express.Router();

Router.get("/home", teacher.GET_TEACHER);
Router.post("/home", teacher.POST_TEACHER);

module.exports = Router;