document.addEventListener("DOMContentLoaded", () => {
    const pretitleImage = document.querySelector('.pretitle-image');

    if (!pretitleImage) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                pretitleImage.style.opacity = '1';
                pretitleImage.style.transform = 'translate3d(0px, 0px, 0px) rotate(0deg)';
            } else {
                pretitleImage.style.opacity = '0';
                pretitleImage.style.transform = 'translate3d(-50px, 50px, 0px) rotate(15deg)';
            }
        });
    }, { threshold: 0.2 });

    observer.observe(pretitleImage);
});

// servicios

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Mostrar las tarjetas solo una vez
                entry.target.classList.add("visible");

                // Animar los iconos cada vez que el usuario pase
                const icon = entry.target.querySelector(".service-icon");
                if (icon) {
                    icon.classList.remove("bouncing"); // Reiniciar animación
                    void icon.offsetWidth; // Truco para reiniciar la animación
                    icon.classList.add("bouncing");
                }
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});


// animacion para laptop seccion nosotros

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.knowledge__img');

    // Función que verifica si un elemento está dentro del área visible del navegador
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0; // Verifica si el elemento es visible
    }

    // Función para aplicar la animación solo una vez
    function checkImages() {
        images.forEach(image => {
            if (isInViewport(image) && !image.classList.contains('animate')) {
                // Si la imagen está en la vista y no tiene la clase 'animate', aplicamos la animación
                image.classList.add('animate');
            }
        });
    }

    // Llamar a la función al hacer scroll
    window.addEventListener('scroll', checkImages);

    // Llamar a la función al cargar la página para animar los elementos visibles desde el principio
    window.addEventListener('load', checkImages);
});





