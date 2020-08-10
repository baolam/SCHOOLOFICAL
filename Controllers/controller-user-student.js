const system = require("../Events/event");
module.exports.GET_STUDENT = (req, res) => {
    var search = req.query.subjects;
    console.log(search);

    res.render("./user/students/home.ejs", {
        title: "Home"
    })
}

module.exports.POST_STUDENT = (req, res) => {

}

module.exports.SEARCH_STUDENT = (req, res) => {

}

module.exports.PASSPORT_ADMIN = (req, res) => {
    res.send("Admin complete!");
    system.emit("admin_ok");
}