document.addEventListener('DOMContentLoaded', function() {
    // Gestionar los dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Función para cerrar todos los dropdowns
    const closeAllDropdowns = () => {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    };
    
    // Manejar clicks en los dropdowns
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown__trigger');
        
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Cerrar otros dropdowns abiertos
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });
            
            // Alternar el estado activo del dropdown actual
            dropdown.classList.toggle('active');
        });
    });
    
    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });
    
    // Compatibilidad con el menú móvil
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelector('.nav__link--menu');
    const navClose = document.querySelector('.nav__close');
    
    if (navMenu) {
        navMenu.addEventListener('click', () => {
            navLinks.classList.add('nav__link--show');
        });
    }
    
    if (navClose) {
        navClose.addEventListener('click', () => {
            navLinks.classList.remove('nav__link--show');
            // Cerrar todos los dropdowns cuando se cierra el menú
            closeAllDropdowns();
        });
    }
    
    // Evitar que los clics dentro del dropdown cierren el menú móvil
    const dropdownContents = document.querySelectorAll('.dropdown__content');
    dropdownContents.forEach(content => {
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});