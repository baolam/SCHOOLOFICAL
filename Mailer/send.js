const transporter = require("./config");
const system = require("../Events/event");

const SendMail = transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        system.emit("system-error", err);
    }
    else {
        system.emit("system-data", "Email sent: " + info.response);
    }
})
