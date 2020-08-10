var MATH = $("#MATH");
var Literature = $("#LITERATURE");
var Chemistry = $("#CHEMISTRY");
var English = $("#ENGLISH");
var Physics = $("#PHYSICS");
var P_E = $("#P_E");
var HISTORY = $("#HISTORY");
var Geography = $("#GEOGRAPHY");
var GDCD = $("#GDCD");
var SinhHoc = $("#SINHHOC");
var ComputerScience = $("#COMPUTERSCIENCE");

var Subjects = {
    math: undefined,
    literature : undefined,
    chemistry: undefined,
    english: undefined,
    physics: undefined,
    p_e: undefined,
    history: undefined,
    geography: undefined,
    gdcd: undefined,
    sinhhoc: undefined,
    computerscience: undefined
}

function update() {
    MATH.html(Subjects.math);
    Literature.html(Subjects.literature);
    Chemistry.html(Subjects.chemistry);
    English.html(Subjects.english);
    Physics.html(Subjects.physics);
    P_E.html(Subjects.p_e);
    HISTORY.html(Subjects.history);
    Geography.html(Subjects.geography);
    GDCD.html(Subjects.gdcd);
    SinhHoc.html(Subjects.sinhhoc);
    ComputerScience.html(Subjects.computerscience);
}

$(document).ready(() => {
    socket.on("updating", (data) => {
        Subjects.math = data.math;
        Subjects.literature = data.literature;
        Subjects.chemistry = data.chemistry;
        Subjects.english = data.english;
        Subjects.physics = data.physics;
        Subjects.p_e = data.p_e;
        Subjects.history = data.history;
        Subjects.geography = data.geography;
        Subjects.gdcd = data.gdcd;
        Subjects.sinhhoc = data.sinhhoc;
        Subjects.computerscience = data.computerscience;

        socket.emit("subjects", subjects);
        console.log("Update complete");
        update();
    })
})