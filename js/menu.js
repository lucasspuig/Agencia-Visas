
const dropdown = document.querySelector('.dropdown');
const trigger = dropdown.querySelector('.dropdown__trigger');

// Evento para alternar la clase active al hacer clic
trigger.addEventListener('click', function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado (si aplica)
    dropdown.classList.toggle('active'); // Alterna la clase 'active'
});