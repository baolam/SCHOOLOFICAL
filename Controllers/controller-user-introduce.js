/*
    From server to client 
    title: firstname + lastname (user)
    messeage: introduce
    messeage: --> AI...
*/

module.exports.GET_USER_GENERAL = (req, res) => {
    res.render("./user/user-about.ejs", {
        title: ""
    })   
}