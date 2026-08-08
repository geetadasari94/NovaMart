/* ==========================================
   ShopEase Authentication
========================================== */

// Get all registered users
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

/* ================= REGISTER ================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value;

        let users = getUsers();

        // Check existing email
        const exists = users.find(user => user.email === email);

        if (exists) {
            alert("Email already registered!");
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            phone,
            password
        };

        users.push(newUser);

        saveUsers(users);

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}

/* ================= LOGIN ================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const password = document.getElementById("password").value;

        const users = getUsers();

        const user = users.find(u =>
            u.email === email &&
            u.password === password
        );

        if (!user) {

            alert("Invalid Email or Password");

            return;

        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login Successful!");

        window.location.href = "index.html";

    });

}

/* ================= LOGOUT ================= */

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully!");

    window.location.href = "login.html";

}

/* ================= CHECK LOGIN ================= */

function checkLogin() {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {

        alert("Please Login First!");

        window.location.href = "login.html";

    }

}

/* ================= SHOW USER ================= */

function showUser() {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) return;

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userPhone = document.getElementById("userPhone");

    if (userName) userName.innerText = user.name;
    if (userEmail) userEmail.innerText = user.email;
    if (userPhone) userPhone.innerText = user.phone;

}

/* ================= AUTO LOAD ================= */

window.onload = function () {

    showUser();

};