module.exports.GET_HOME = (req, res) => {
    res.render("./admin/home.ejs", {
        title: ""
    })
}

module.exports.GET_USER = (req, res) => {

}

module.exports.TABLE_USER = (req, res) => {

}

module.exports.GET_LOGIN = (req, res) => {
    res.render("./admin/login.ejs", {
        title: "Login admin!"
    })
}

module.exports.POST_LOGIN = (req, res) => {
    console.log(req.body);
    
}

module.exports.REDIRECT = (req, res) => {
    res.redirect("admin/login");
}