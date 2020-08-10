module.exports.GET_MATH = (req, res) => {
    res.render("./Subject/Math.ejs", {
        title: "Math"
    })
}

module.exports.GET_LITERATURE = (req, res) => {
    res.render("./Subject/Literature.ejs", {
        title: "Literature"
    })
}

module.exports.GET_CHEMISTRY = (req, res) => {
    res.render("./Subject/Chemistry.ejs", {
        title: "Chemistry",
        data: 1
    })
}

module.exports.GET_PHYSICS = (req, res) => {
    res.render("./Subject/Physics.ejs", {
        title: "Physics"
    })
}

module.exports.GET_ENGLISH = (req, res) => {
    res.render("./Subject/English.ejs", {
        title: "English"
    })
}

module.exports.GET_HISTORY = (req, res) => {
    res.render("./Subject/History.ejs", {
        title: "History"
    })
}

module.exports.GET_GEOGRAPHY = (req, res) => {
    res.render("./Subject/Geography.ejs", {
        title: "Geography"
    })
}

module.exports.GET_COMPUTER_SCIENCE = (req, res) => {
    res.render("./Subject/Computer-Science.ejs", {
        title: "Computer Science"
    })
}

module.exports.GET_P_E = (req, res) => {
    res.render("./Subject/P_E.ejs", {
        title: "Physical Education"
    })
}

module.exports.GET_SINH_HOC = (req, res) => {
    res.render("./Subject/Sinhhoc.ejs", {
        title: "Sinh học"
    })
}

module.exports.GET_GHCD = (req, res) => {
    res.render("./Subject/GDCD.ejs", {
        title: "Giáo dục công dân"
    })
}