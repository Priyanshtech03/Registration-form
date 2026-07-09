// ==============================
// Registration Form Script
// ==============================

const form = document.getElementById("registerForm");

const fullname = document.getElementById("fullname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strengthBar");

const profileImage = document.getElementById("profileImage");
const preview = document.getElementById("preview");

const userMessage = document.getElementById("userMessage");

const loader = document.getElementById("loader");
const popup = document.getElementById("successPopup");

// ======================================
// Profile Image Preview
// ======================================

profileImage.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        preview.src = URL.createObjectURL(file);

    }

});

// ======================================
// Show / Hide Password
// ======================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// ======================================
// Password Strength
// ======================================

password.addEventListener("input", function () {

    let value = password.value;

    let strength = 0;

    if (value.length >= 8)
        strength++;

    if (/[A-Z]/.test(value))
        strength++;

    if (/[a-z]/.test(value))
        strength++;

    if (/[0-9]/.test(value))
        strength++;

    if (/[!@#$%^&*(),.?":{}|<>]/.test(value))
        strength++;

    switch (strength) {

        case 1:

            strengthBar.style.width = "20%";
            strengthBar.style.background = "#ff3b30";
            break;

        case 2:

            strengthBar.style.width = "40%";
            strengthBar.style.background = "#ff9500";
            break;

        case 3:

            strengthBar.style.width = "60%";
            strengthBar.style.background = "#ffd60a";
            break;

        case 4:

            strengthBar.style.width = "80%";
            strengthBar.style.background = "#30d158";
            break;

        case 5:

            strengthBar.style.width = "100%";
            strengthBar.style.background = "#00c853";
            break;

        default:

            strengthBar.style.width = "0%";
            strengthBar.style.background = "red";

    }

});

// ======================================
// Username Validation
// ======================================

const reservedNames = [

    "admin",
    "root",
    "test",
    "guest",
    "user"

];

username.addEventListener("input", function () {

    const value = username.value.trim().toLowerCase();

    if (value === "") {

        userMessage.innerHTML = "";

        return;

    }

    if (value.length < 4) {

        userMessage.style.color = "#ffd60a";

        userMessage.innerHTML =
            "Username must contain at least 4 characters.";

    }

    else if (reservedNames.includes(value)) {

        userMessage.style.color = "#ff3b30";

        userMessage.innerHTML =
            "Username is already taken.";

    }

    else {

        userMessage.style.color = "#30d158";

        userMessage.innerHTML =
            "✓ Username Available";

    }

});

// ======================================
// Phone Validation
// ======================================

phone.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

});

// ======================================
// Form Submit
// ======================================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    loader.style.display = "block";

    popup.style.display = "none";

    setTimeout(function () {

        loader.style.display = "none";

        popup.style.display = "block";

        form.reset();

        preview.src =
            "https://cdn-icons-png.flaticon.com/512/847/847969.png";

        strengthBar.style.width = "0%";

        strengthBar.style.background = "red";

        userMessage.innerHTML = "";

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

        setTimeout(function () {

            popup.style.display = "none";

        }, 3000);

    }, 2000);

});
