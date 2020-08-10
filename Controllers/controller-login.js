const system = require("../Events/event");
var not_login = undefined;

module.exports.CHECK_LOGIN_ADMIN = (req, res, next) => {
    next();
}

module.exports.CHECK_LOGIN_USER = (req, res, next) => {
    if(!req.cookies) {
        if(req.cookies.user) {
            not_login = 0;
            system.emit("system-login", not_login);
        }
    }
    else {
        not_login = 1;
        system.emit("system-login", not_login);
    }
    next();
}