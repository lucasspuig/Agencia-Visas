document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.nav__menu');
    const closeButton = document.querySelector('.nav__close');
    const menu = document.querySelector('.nav__link--menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownTriggers = document.querySelectorAll('.dropdown__trigger');

    // Abrir menú móvil
    menuButton.addEventListener('click', function () {
        menu.classList.add('show-menu');
    });

    // Cerrar menú móvil
    closeButton.addEventListener('click', function () {
        menu.classList.remove('show-menu');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });

    // Manejar dropdowns
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            const currentDropdown = this.closest('.dropdown');

            // Si el dropdown actual está activo, lo cerramos
            if (currentDropdown.classList.contains('active')) {
                currentDropdown.classList.remove('active');
                return;
            }

            // Cerrar otros dropdowns
            dropdowns.forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove('active');
                }
            });

            // Abrir el dropdown actual
            currentDropdown.classList.add('active');
        });
    });

    // Cerrar dropdowns y menú al hacer click fuera
    document.addEventListener('click', function (e) {
        const isClickInsideMenu = menu.contains(e.target);
        const isClickOnMenuButton = menuButton.contains(e.target);
        const isClickOnDropdown = e.target.closest('.dropdown');

        if (!isClickInsideMenu && !isClickOnMenuButton && !isClickOnDropdown) {
            menu.classList.remove('show-menu');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Cerrar menú al hacer click en enlaces (excepto dropdowns)
    const menuLinks = document.querySelectorAll('.nav__links:not(.dropdown__trigger)');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('show-menu');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        });
    });
});


