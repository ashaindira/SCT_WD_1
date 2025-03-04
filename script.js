/// Change Navbar Background on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Fade-In Effect for Sections
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

