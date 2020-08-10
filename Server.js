const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const env = require("dotenv");
const events = require("events");
const express = require("express");
const ExpressRateLimit = require("express-rate-limit");
const favicon = require("serve-favicon");
const fs = require("fs");
const helmet = require("helmet");
const http = require("http");
const morgan = require("morgan");
const path = require("path");
const { ppid } = require("process");
const socketio = require("socket.io");

// Passport user
const ExpressSession = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local"); 

const app = express();
const EventEmitter = new events.EventEmitter();
const system = require("./Events/event");
const server = http.Server(app);
const io = socketio(server);

// Create variable
const alphabet = "abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789"; // Used ~~~~~ Passport admin
var random_Alphabet = "/";
var lg = undefined , question = undefined;

env.config(); // Enviroment

const mailOptions = {
    from: process.env.MAIL,
    to: process.env.MAIL,
    subject: "Try to connect admin block",
    html: "<h1> Connect to admin blocked </h1> <h2> Did you do it? </h2><h2> Passport admin</h2>"
}

const Max_request = ExpressRateLimit({
    windowMs: 15 * 60 * 1000,
    max: 250
})

for(let i = 0; i < 64; i++) {
    random_Alphabet += alphabet[Math.floor(Math.random() * (60 - 0) + 0)];
}

// Models
const admin = require("./Models/model-admin");
const request = require("./ERROR/error");
const creator = require("./Models/model-create");
const login = require("./Controllers/controller-login");
const nofication = require("./Models/model-nofication");
const transporter = require("./Mailer/config");
const introduce = require("./Models/model-user-introduce");
const students = require("./Models/model-user-student");
const subjects = require("./Models/model-mon-hoc");
const teachers = require("./Models/model-user-teacher");
const UserLogin = require("./Models/model-user-login");

// Package ejs
app.set("view engine", "ejs");
app.set("views", "./Views");

// Bodyparser - CookieParser - Public
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use(CookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(ExpressSession({secret: "keyboard cat"}));
app.use(flash());

// XSS
app.use(helmet.dnsPrefetchControl());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());

app.use(Max_request);
app.use(morgan("common"));

app.use(request.CHECK_ADMIN);

// Models created
app.use("/admin", login.CHECK_LOGIN_ADMIN ,admin);
app.use("/user/student", login.CHECK_LOGIN_USER, students);
app.use("/user/teacher" , login.CHECK_LOGIN_USER ,teachers);
app.use("/user/about", login.CHECK_LOGIN_USER, introduce);
app.use("/user", creator);
app.use("/user", nofication);
app.use("/user", UserLogin);
app.use("/subjects", subjects);

system.on("admin_login", () => {
    system.emit("random_Alphabet", random_Alphabet);
})

system.on("system-login", (data) => {
    if(data == 1) {
        lg = 0;
    }
    else {
        lg = 1;
    }
})

//Socket io
io.on("connection", (socket) => {
    var c;

    console.log("Connect " + socket.id);
    socket.on("disconnect", () => {
        console.log("Disconnect! " + socket.id);
    });

    socket.on("hello", (data) => {
        console.log("Client: " + data);
    })

    if(question == 1) {
        c = "How do you feel?...";
    }
    else if(question == 2) {
        c = "What will you do?...";
    }
    else if(question == 3) {
        c = "What are you doing?...";
    }
    else if(question == 4) {
        c = "Do you a hacker?...";
    }
    else {
        c = "How are you today...";
    }

    socket.emit("reply", c);
    socket.emit("login", lg);

    socket.on("subjects", (data) => {
        
    })
})

// simple url
app.get("/", (req, res) => {
    res.redirect("/user/student/home");
})

app.get("/about", (req, res) => {
    res.render("./admin/about.ejs", {
        title: "About || Lam"
    });
})

app.get("/admin", (req, res) => {
    res.redirect("/login");
})

//Not found
//=====================================
app.use((req, res, next) => {
    var error = new Error("Not Found");
    error.status = 404;
    next(error);
})

if(app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render("ERROR.ejs");
    })
}

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("ERROR.ejs");
})
//====================================

// Timer
setInterval(() => {
    question = Math.floor(Math.random() * (5 - 1) + 1);
}, 1000)

server.listen(process.env.PORT, () => {
    console.log("Server is listening on port ", process.env.PORT);
})