const events = require("events");
const EventEmitter = new events.EventEmitter();

var er = {};
module.exports.GET_TEACHER = (req, res) => {
    res.render("./user/students/home.ejs", {
        title: "Home "
    })
}

module.exports.POST_TEACHER = (req, res) => {

}
