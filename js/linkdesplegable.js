document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Prevenir navegación del enlace principal
            if (e.target.closest('.nav__links')) {
                e.preventDefault();
            }
            
            // Toggle clase active
            this.classList.toggle('active');
        });
    });
});