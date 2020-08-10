const express = require("express");

const creator = require("../Controllers/controller-create");
const Router = express.Router();

Router.get("/create", creator.GET_PAGE_CREATE);
Router.post("/create", creator.POST_CREATE);

module.exports = Router;