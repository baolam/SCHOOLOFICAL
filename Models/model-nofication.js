const express = require("express");
const noficiation = require("../Controllers/controller-noficiation");
const Router = express.Router();

Router.get("/nofication", noficiation.GET_PAGE_NOFICITAION);

module.exports = Router;