module.exports.GET_LOGIN = (req, res) => {
    res.render("./user/login.ejs", {
        title: ""
    })
}

module.exports.POST_LOGIN = (req, res) => {
    console.log(req.body);
    
}