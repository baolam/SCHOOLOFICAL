var socket = io.connect();
var login = undefined;

socket.emit("hello", "Hello from user/home");

socket.on("reply", (data) => {
    $("#msg").html(data);
});

socket.on("login", (data) => {
    if(data == 1) {
        console.log("Login OK!");
    }
    else {
        console.log("Login No!");
    }
    login = data;
})

console.log("Running!");
