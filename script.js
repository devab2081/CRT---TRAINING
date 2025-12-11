// Login validation
function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email === "" || pass === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Login Successful (CRT Demo)");
    return true;
}

// Register validation
function validateRegister() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPassword").value;
    let confirm = document.getElementById("regConfirm").value;

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Registration Successful (CRT Demo)");
    return true;
}
