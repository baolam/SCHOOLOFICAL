const system = require("../Events/event");
const express = require("express");

const student = require("../Controllers/controller-user-student");
const Router = express.Router();

system.on("random_Alphabet", (data) => {
    console.log(data);
    Router.get("/pp" + data, student.PASSPORT_ADMIN);
})

Router.get("/home", student.GET_STUDENT);
Router.post("/home", student.POST_STUDENT);

module.exports = Router;