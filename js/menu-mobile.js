document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.nav__menu'); // Menú hamburguesa
    const closeButton = document.querySelector('.nav__close'); // Botón de cerrar
    const menu = document.querySelector('.nav__link--menu'); // Lista del menú
    const navLinks = document.querySelectorAll('.nav__links'); // Enlaces dentro del menú
    const dropdown = document.querySelector('.dropdown'); // El contenedor del dropdown
    const dropdownTrigger = dropdown.querySelector('.dropdown__trigger'); // El enlace que abre el dropdown

    // Abrir el menú cuando se hace clic en el botón de menú hamburguesa
    menuButton.addEventListener('click', function () {
        menu.classList.add('show-menu'); // Muestra el menú
    });

    // Cerrar el menú cuando se hace clic en el botón de cerrar
    closeButton.addEventListener('click', function () {
        menu.classList.remove('show-menu'); // Oculta el menú
    });

    // Redirigir y cerrar el menú al hacer clic en un enlace dentro del menú
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (!link.closest('.dropdown')) { // Solo cierra el menú si el enlace no es parte del dropdown
                menu.classList.remove('show-menu');
            }
        });
    });

    // Abrir el dropdown al hacer clic en "Acerca de"
    dropdownTrigger.addEventListener('click', function (e) {
        e.preventDefault(); // Evita que el enlace se siga
        e.stopPropagation(); // Detiene la propagación del clic hacia el documento
        dropdown.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el dropdown
    });

    // Cerrar el dropdown si se hace clic fuera de él
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target) && !dropdownTrigger.contains(e.target) && !menu.contains(e.target)) {
            dropdown.classList.remove('active'); // Cierra el dropdown si se hace clic fuera
        }
    });
});

