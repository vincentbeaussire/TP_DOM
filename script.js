const descriptions = [
    "Honnêteté.",
    "Respect.",
    "Loyal.",
];

let currentDescription = "";

const descriptionText = document.getElementById("description-text");
const changeDescription = document.getElementById("change-description");
const pseudoInput = document.getElementById("pseudo");
const pseudoError = document.getElementById("pseudo-error");
const avatars = document.querySelectorAll(".avatar");
const nextBtn = document.getElementById("next-btn");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const formContainer = document.getElementById("form-container");
const profileCard = document.getElementById("profile-card");

pseudoInput.addEventListener("input", () => {
    localStorage.setItem("pseudo", pseudoInput.value);
})

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("pseudo");
    if (saved) pseudoInput.value = saved;
})

let selectedAvatar = null;
let isPseudoValid = false;


// 1) Thème clair et sombre
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const isDark = body.classList.contains("dark");
    themeToggle.textContent = isDark ? "Thème clair" : "Thème sombre";
});



// 2) Description
function getRandomDescription() {
    let newDescription;
    do {
        newDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    } while (newDescription === currentDescription);
    currentDescription = newDescription;
    descriptionText.textContent = newDescription;
}

// 3) Pseudo
function validatePseudo() {
    const value = pseudoInput.value;
    const isValid = /^\p{L}+$/u.test(value);

    if (!isValid) {
        pseudoError.textContent = "Invalide. Le pseudo doit contenir que des lettres.";
        isPseudoValid = false;
    } else {
        pseudoError.textContent = "";
        isPseudoValid = true;
    }

    checkFormValidity();
}

// 4) Avatar
avatars.forEach((avatar) => {
    avatar.addEventListener("click", () => {
        avatars.forEach((av) => av.classList.remove("selected"));
        avatar.classList.add("selected");
        selectedAvatar = avatar.src;
        checkFormValidity();
    });
});

// Vérification qu'un pseudo est saisi et qu'une description est présente = bouton cliquable
function checkFormValidity() {
    const valid = isPseudoValid && currentDescription && selectedAvatar;
    nextBtn.disabled = !valid;
}


// 6)  Page profil avec le pseudo, l'avatar et la description
nextBtn.addEventListener("click", () => {
    formContainer.style.display = "none";

    profileCard.innerHTML = `
    <h2>Bonjour mon cher ami, ${pseudoInput.value} !</h2>
    <p>${currentDescription}</p>
    <img src="${selectedAvatar}" alt="Avatar sélectionné"/>`;
    profileCard.classList.remove("hidden");
});

// Fonctionnement - renvoie vers une autre page
window.addEventListener("DOMContentLoaded", () => {
    getRandomDescription();
});

changeDescription.addEventListener("click", getRandomDescription);
pseudoInput.addEventListener("input", validatePseudo);
