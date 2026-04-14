// MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// DARK MODE
const darkBtn = document.getElementById("darkModeToggle");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan terkirim 🚀");
});
