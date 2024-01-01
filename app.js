let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");

let title = document.getElementById("title");


signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "sign In ";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
}


signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "sign up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
}
