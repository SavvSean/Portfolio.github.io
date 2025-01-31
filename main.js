// DOM Elements
const navLinks = document.querySelectorAll(".nav a, .btn.contacts"); // Includes the "Reach out!" button
const sections = document.querySelectorAll(".section");
const homeSection = document.querySelector(".home");

// Home Section Typing Animation for Occupation
const typingElement = document.querySelector(".typing");
const occupations = ["Computer Scientist", "Student", "Gamer"];
let currentOccupationIndex = 0;
let currentCharIndex = 0;

function typeOccupation() {
    if (currentCharIndex < occupations[currentOccupationIndex].length) {
        typingElement.textContent += occupations[currentOccupationIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeOccupation, 100); // Adjust typing speed
    } else {
        setTimeout(() => {
            typingElement.textContent = "";
            currentCharIndex = 0;
            currentOccupationIndex = (currentOccupationIndex + 1) % occupations.length;
            typeOccupation();
        }, 1500); // Pause before starting the next occupation
    }
}

// Start Typing Animation on Page Load
window.addEventListener("load", typeOccupation);

document.addEventListener("DOMContentLoaded", function () {
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetSection = document.querySelector(this.getAttribute("href"));

            if (targetSection) {
                event.preventDefault(); // Prevent default anchor behavior

                // Remove 'active' class from all links
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");

                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove("active");
                    section.classList.add("hidden");
                });

                // Show the clicked section
                targetSection.classList.remove("hidden");
                setTimeout(() => targetSection.classList.add("active"), 10);

                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Initially hide all sections except home
    sections.forEach(section => section.classList.add("hidden"));
    homeSection.classList.remove("hidden");
    homeSection.classList.add("active");
});
