const form = document.getElementById("registerForm");

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strengthBar = document.getElementById("strengthBar");

const username = document.getElementById("username");
const userMessage = document.getElementById("userMessage");

const profileImage = document.getElementById("profileImage");
const preview = document.getElementById("preview");

const loader = document.getElementById("loader");
const popup = document.getElementById("successPopup");

profileImage.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        preview.src = URL.createObjectURL(file);

    }

});

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    }

    else {

        password.type = "password";

        this.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

password.addEventListener("keyup", function () {

    let value = password.value;

    let strength = 0;

    if (value.length >= 8)
        strength++;

    if (/[A-Z]/.test(value))
        strength++;

    if (/[0-9]/.test(value))
        strength++;

    if (/[!@#$%^&*(),.?":{}|<>]/.test(value))
        strength++;

    switch (strength) {

        case 1:

            strengthBar.style.width = "25%";
            strengthBar.style.background = "#ff3b30";

            break;

        case 2:

            strengthBar.style.width = "50%";
            strengthBar.style.background = "#ff9500";

            break;

        case 3:

            strengthBar.style.width = "75%";
            strengthBar.style.background = "#ffd60a";

            break;

        case 4:

            strengthBar.style.width = "100%";
            strengthBar.style.background = "#34c759";

            break;

        default:

            strengthBar.style.width = "0%";
            strengthBar.style.background = "red";

    }

});

username.addEventListener("keyup", function () {

    let value = username.value.trim().toLowerCase();

    const reserved = [
        "admin",
        "root",
        "test",
        "guest",
        "user"
    ];

    if (value.length === 0) {

        userMessage.innerHTML = "";

    }

    else if (value.length < 4) {

        userMessage.style.color = "#ffd60a";
        userMessage.innerHTML = "Username must be at least 4 characters.";

    }

    else if (reserved.includes(value)) {

        userMessage.style.color = "#ff453a";
        userMessage.innerHTML = "Username is already taken.";

    }

    else {

        userMessage.style.color = "#30d158";
        userMessage.innerHTML = "✓ Username available.";

    }

});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    loader.style.display = "block";

    setTimeout(function () {

        loader.style.display = "none";

        popup.style.display = "block";

        form.reset();

        preview.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

        strengthBar.style.width = "0%";

        userMessage.innerHTML = "";

        setTimeout(function () {

            popup.style.display = "none";

        }, 3000);

    }, 2000);

});