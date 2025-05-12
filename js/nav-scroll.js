document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav');
    let lastScroll = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Agregar fondo cuando se hace scroll
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Ocultar nav cuando se hace scroll hacia abajo
        if (currentScroll > lastScroll && currentScroll > 200) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }

        lastScroll = currentScroll;
    });
});
