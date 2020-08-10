const express = require("express");

const MonHoc = require("../Controllers/controller-mon-hoc");
const Router = express.Router();

Router.get("/math", MonHoc.GET_MATH);
Router.get("/literature", MonHoc.GET_LITERATURE);
Router.get("/chemistry", MonHoc.GET_CHEMISTRY);
Router.get("/english", MonHoc.GET_ENGLISH);
Router.get("/history", MonHoc.GET_HISTORY);
Router.get("/geography", MonHoc.GET_GEOGRAPHY);
Router.get("/computer", MonHoc.GET_COMPUTER_SCIENCE);
Router.get("/PE", MonHoc.GET_P_E);
Router.get("/physics", MonHoc.GET_PHYSICS);
Router.get("/GDCD", MonHoc.GET_GHCD);
Router.get("/sinhhoc", MonHoc.GET_SINH_HOC);

module.exports = Router;