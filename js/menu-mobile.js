document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.nav__menu');
    const closeButton = document.querySelector('.nav__close');
    const menu = document.querySelector('.nav__link--menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownTriggers = document.querySelectorAll('.dropdown__trigger');
    const allMenuLinks = document.querySelectorAll('.nav__link--menu a:not(.dropdown__trigger), .dropdown__content a');

    // Función para cerrar el menú y los dropdowns
    function closeMenuAndDropdowns() {
        menu.classList.remove('show-menu');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }

    // Abrir menú móvil
    menuButton.addEventListener('click', function () {
        menu.classList.add('show-menu');
    });

    // Cerrar menú móvil con botón de cerrar
    closeButton.addEventListener('click', closeMenuAndDropdowns);

    // Cerrar menú al hacer clic en cualquier enlace (excepto triggers de dropdown)
    allMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenuAndDropdowns);
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
            closeMenuAndDropdowns();
        }
    });
});


