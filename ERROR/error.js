const system = require("../Events/event");
var not_Admin = 1;

system.on("admin_ok", () => {
  not_Admin = 0;
  console.log("Quyền ADMIN đã được truy cập!");      
})

module.exports.CHECK_ADMIN = (req, res, next) => {
    var receive = req.url;
    var c = "/";
    for(let i = 1; i <= 5; i++)
        c += receive[i];
    if(c == "/admin") { 
        console.log("Try to connect admin block!");
                
    }
    
    if(receive == "/admin" && not_Admin == 1) {
        system.emit("admin_login"); 
        res.render("ERROR.ejs");
    }
    else if(c == "/admin" && not_Admin == 1) {
        res.render("ERROR.ejs");
    }
    else {
        next();
    }
}
