const bcrypt = require("bcrypt");
const system = require("../Events/event");

const GenSaltRound = 12;

module.exports.GET_PAGE_CREATE = (req, res) => {
    res.render("./user/create", {
        title: "Create"
    })
}

module.exports.POST_CREATE = (req, res) => {
    console.log(req.body);

    res.redirect("../../../../../");
}