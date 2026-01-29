// Ano dinâmico no footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Efeito de scroll no menu
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Se o scroll passar de 50px, adiciona a classe 'scrolled'
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const menuDesktop = document.querySelector('.menu-desktop');
        if (menuDesktop) {
            menuDesktop.classList.toggle('open');
        }
    });
}