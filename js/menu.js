(function(){
    const navMenu = document.querySelector('.nav__link--menu');
    const navToggle = document.querySelector('.nav__menu');
    const navClose = document.querySelector('.nav__close');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Mostrar menú
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Ocultar menú
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            dropdowns.forEach(d => d.classList.remove('active'));
        });
    }

    // Manejar clicks en el documento
    document.addEventListener('click', (e) => {
        // Si el click es fuera del menú y no es el botón del menú
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });

    // Manejar dropdowns en móvil
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav__links');
        
        trigger.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Cerrar menú al hacer click en enlaces (excepto dropdowns)
    const menuLinks = document.querySelectorAll('.nav__links:not(.dropdown .nav__links)');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
            dropdowns.forEach(d => d.classList.remove('active'));
        });
    });
})();
