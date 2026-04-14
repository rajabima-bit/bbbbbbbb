// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// SMOOTH SCROLL
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim 🚀");
});
