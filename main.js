// main.js

// DOM Elements
const navLinks = document.querySelectorAll('.nav li a');
const sections = document.querySelectorAll('.section');
const homeSection = document.querySelector('.home');


// Home Section Typing Animation for Occupation
const typingElement = document.querySelector('.typing');
const occupations = ['Computer Scientist', 'Student', 'Gamer'];
let currentOccupationIndex = 0;
let currentCharIndex = 0;

function typeOccupation() {
    if (currentCharIndex < occupations[currentOccupationIndex].length) {
        typingElement.textContent += occupations[currentOccupationIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeOccupation, 100); // Adjust typing speed
    } else {
        setTimeout(() => {
            typingElement.textContent = '';
            currentCharIndex = 0;
            currentOccupationIndex = (currentOccupationIndex + 1) % occupations.length;
            typeOccupation();
        }, 1500); // Pause before starting the next occupation
    }
}

// Start Typing Animation on Page Load
window.addEventListener('load', typeOccupation);
