// ================================
// Get Elements
// ================================

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

// ================================
// Profile Image Preview
// ================================

profileImage.addEventListener("change", () => {

    const file = profileImage.files[0];

    if (file) {

        preview.src = URL.createObjectURL(file);

    }

});

// ================================
// Show / Hide Password
// ================================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

    }

    else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    }

});

// ================================
// Password Strength
// ================================

password.addEventListener("input", () => {

    const value = password.value;

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

// ================================
// Username Validation
// ================================

username.addEventListener("input", () => {

    const value = username.value.trim().toLowerCase();

    const reserved = [

        "admin",
        "root",
        "test",
        "guest",
        "user"

    ];

    if (value.length === 0) {

        userMessage.innerHTML = "";

        return;

    }

    if (value.length < 4) {

        userMessage.style.color = "#ffd60a";

        userMessage.innerHTML =
            "Username must be at least 4 characters.";

        return;

    }

    if (reserved.includes(value)) {

        userMessage.style.color = "#ff453a";

        userMessage.innerHTML =
            "Username is already taken.";

        return;

    }

    userMessage.style.color = "#30d158";

    userMessage.innerHTML =
        "✓ Username available.";

});

// ================================
// Form Submit
// ================================

form.addEventListener("submit", (e) => {

    e.preventDefault();

    loader.style.display = "block";

    popup.style.display = "none";

    setTimeout(() => {

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

        setTimeout(() => {

            popup.style.display = "none";

        }, 3000);

    }, 2000);

});
