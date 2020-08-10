var Email = document.getElementById("Email_ER");
var Password = document.getElementById("Password_ER");

var input_Email = document.getElementById("EMAIL");
var input_Password = document.getElementById("PASSWORD");
var __ADMIN__ = 1; // if = 5 block...

window.addEventListener("load", () => {
    var forms = document.getElementsByClassName("needs-validation");
    var validation = Array.prototype.filter.call(forms, (form) => {
        form.addEventListener("submit", (event) => {
            if(form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();

                __ADMIN__ ++;
                //Continute...
                if(input_Email.value === "" || input_Email.value === '' || input_Email.value === undefined) {
                    Email.innerHTML = "Email?";
                    Email.classList.add("invalid-feedback");
                }
                else {
                    Email.innerHTML = "OK!";
                    Email.classList.remove("invalid-feedback");
                    Email.classList.add("valid-feedback");
                }

                if(input_Password.value === "" || input_Password.value === '' || input_Password.value === undefined) {
                    Password.innerHTML = "Password... Do you entered?";
                    Password.classList.add("invalid-feedback");
                }
                else {
                    Password.innerHTML = "OK!";
                    Password.classList.remove("invalid-feedback");
                    Password.classList.add("valid-feedback");
                }
                form.classList.add("was-validated");
                document.getElementById("NUMBER_OF_LOGIN_ATTEMPS").value = __ADMIN__;
            }
        })
    })
})