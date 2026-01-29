// Ano dinâmico no footer
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Efeito de scroll no menu
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');

if (menuToggle && menuMobile) {
    menuToggle.addEventListener('click', function() {
        menuMobile.classList.toggle('open');
        menuToggle.classList.toggle('active');
        
        // Muda o ícone do hamburguer para X
        if (menuMobile.classList.contains('open')) {
            menuToggle.textContent = '✕';
        } else {
            menuToggle.textContent = '☰';
        }
    });
    
    // Fecha o menu ao clicar em um link
    const menuLinks = menuMobile.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuMobile.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });
}