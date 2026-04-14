// Toggle menu mobile
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Scroll animation
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if (position < screen - 100) {
            el.classList.add('show');
        }
    });
});

// Scroll button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim 🚀");
});
