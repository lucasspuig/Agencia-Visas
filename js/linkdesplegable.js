document.addEventListener('DOMContentLoaded', function() { 
    // Seleccionar los elementos
    const dropdowns = document.querySelectorAll('.dropdown');
    const dropdownLinks = document.querySelectorAll('.dropdown__content a'); // Enlaces dentro del dropdown

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
            e.stopPropagation(); // Detiene la propagación para que no cierre el menú principal
            
            // Cerrar otros dropdowns abiertos
            dropdowns.forEach(other => {
                if (other !== dropdown) {
                    other.classList.remove('active');
                }
            });

            // Alternar el estado del dropdown actual
            dropdown.classList.toggle('active');
        });

        // Evitar que los clics dentro del contenido del dropdown cierren el menú
        const dropdownContent = dropdown.querySelector('.dropdown__content');
        dropdownContent.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el menú principal se cierre
        });
    });

    // Cerrar dropdowns al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    // Cerrar el menú cuando se selecciona un enlace dentro del dropdown
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav__link').classList.remove('nav__link--show'); // Cierra el menú
            closeAllDropdowns(); // También cierra los dropdowns
        });
    });
});
