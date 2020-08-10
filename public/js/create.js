var FirstName = document.getElementById("FN");
var LastName = document.getElementById("LN");
var Email = document.getElementById("EL");
var Password = document.getElementById("PW");
var Birthday = document.getElementById("BiD");
var Job = document.getElementById("YJ");
var introduce = document.getElementById("Intro");

var ok = 0;
var input_FirstName = document.getElementById("FirstName");
var input_LastName = document.getElementById("LastName");
var input_Email = document.getElementById("Email");
var input_Password = document.getElementById("Password");
var input_Birthday = document.getElementById("BirthDay");
var input_Job = document.getElementById("Job");
var input_introduce = document.getElementById("Description");

var information_user = {
    FirstName: undefined,
    LastName: undefined,
    Email: undefined,
    Password: undefined,
    Birthday: undefined,
    Job: undefined,
    Gender: undefined,
    introduce: undefined
}

window.addEventListener("load", () => {
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, (form) => {
        form.addEventListener("submit", (event) => {
            if(form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                updating();
                console.log(information_user);
                if(information_user.FirstName === "" || information_user.FirstName === undefined) {
                    FirstName.innerHTML = "Check first name? You entered?";
                    FirstName.classList.add("invalid-feedback");
                }
                else {
                    FirstName.innerHTML = "OK!";
                    FirstName.classList.remove("invalid-feedback");
                    FirstName.classList.add("valid-feedback");
                }

                if(information_user.LastName === "" || information_user.LastName === undefined) {
                    LastName.innerHTML = "Check last name? You entered?";
                    LastName.classList.add("invalid-feedback");
                }
                else {
                    LastName.innerHTML = "OK!";
                    LastName.classList.remove("invalid-feedback");
                    LastName.classList.add("valid-feedback");
                }

                if(information_user.Email === "" || information_user.Email === undefined) {
                    Email.innerHTML = "Gmail?";
                    Email.classList.add("invalid-feedback");
                }
                else {
                    Email.innerHTML = "OK";
                    Email.classList.remove("invalid-feedback");
                    Email.classList.add("valid-feedback");
                }

                if(information_user.Password === '' || information_user.Password === "" || information_user.Password === undefined) {
                    Password.innerHTML = "Password?";
                    Password.classList.add("invalid-feedback");
                }
                else {
                    Password.innerHTML = "OK!";
                    Password.classList.remove("invalid-feedback");
                    Password.classList.add("valid-feedback");
                }

                if(information_user.Birthday === "" || information_user.Birthday === undefined) {
                    Birthday.innerHTML = "Birthday?";
                    Birthday.classList.add("invalid-feedback");
                }
                else {
                    Birthday.innerHTML = "OK!";
                    Birthday.classList.remove("invalid-feedback");
                    Birthday.classList.add("valid-feedback");
                }
                
                if(information_user.Job === "") {
                    Job.innerHTML = "Your Job?";
                    Job.classList.add("invalid-feedback");
                }
                else {
                    Job.innerHTML = "Ok!";
                    Job.classList.remove("invalid-feedback");
                    Job.classList.add("valid-feedback");
                }

                if(information_user.introduce === "" || information_user.introduce === undefined) {
                    introduce.innerHTML = "Introduce yourself... ";
                    introduce.classList.add("invalid-feedback");
                }
                else {
                    introduce.innerHTML = "OK!";
                    introduce.classList.remove("invalid-feedback");
                    introduce.classList.add("valid-feedback");
                }

                if(ok == 1) {
                    alert("Nếu gặp trường hợp tất cả đều OK rồi mà ko submit được vui lòng kiểm tra gender -- bạn đã chọn nó chưa?");
                }
                ok++;
                form.classList.add("was-validated");
            }
        })
    })
})

function updating() {
    information_user.FirstName = input_FirstName.value;
    information_user.LastName = input_LastName.value;
    information_user.Email = input_Email.value;
    information_user.Password = input_Password.value;
    information_user.Birthday = input_Birthday.value;
    information_user.Job = input_Job.value;
    information_user.introduce = input_introduce.value;
}
