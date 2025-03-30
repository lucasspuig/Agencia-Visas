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


//animacion seccion jesi 

document.addEventListener("DOMContentLoaded", function () {
    const subtitle = document.querySelector(".subtitlejes");
    const testimony = document.querySelector(".testimony__review");

    const observerSubtitle = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    subtitle.classList.add("visible");
                    observerSubtitle.unobserve(subtitle); // Evita repetir la animación
                }
            });
        },
        { threshold: 0.5 }
    );

    const observerTestimony = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    testimony.classList.add("visible");
                    observerTestimony.unobserve(testimony); // Evita repetir la animación
                }
            });
        },
        { threshold: 0.5 }
    );

    observerSubtitle.observe(subtitle);
    observerTestimony.observe(testimony);
});

//animacion imagen jsi
document.addEventListener("DOMContentLoaded", function () {
    const testimonyImg = document.querySelector(".testimony__img");

    const observerTestimonyImg = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    testimonyImg.classList.add("visible");
                    observerTestimonyImg.unobserve(testimonyImg); // Evita repetir la animación
                }
            });
        },
        { threshold: 0.5 } // Cuando el 50% de la imagen sea visible
    );

    observerTestimonyImg.observe(testimonyImg);
});

//animaciones seccion de preguntas

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".questions__padding");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 200); // Retraso escalonado (200ms entre cada pregunta)
                    observer.unobserve(entry.target); // Evita que la animación se repita
                }
            });
        },
        { threshold: 0.7 } // Se activa cuando el 30% de la pregunta es visible
    );

    questions.forEach((question) => observer.observe(question));
});

//animaciones seccion de xq elegirnoi

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, index * 200); // Retraso escalonado (200ms entre cada elemento)
                    observer.unobserve(entry.target); // Evita que la animación se repita
                }
            });
        },
        { threshold: 0.8 } // Se activa cuando el 30% del elemento es visible
    );

    features.forEach((feature) => observer.observe(feature));
});


//animaciones seccion fotter
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("footer__visible");
                } else {
                    entry.target.classList.remove("footer__visible"); // Reinicia la animación al salir
                }
            });
        },
        { threshold: 0.3 } // Se activa cuando el 30% del footer es visible
    );

    observer.observe(footer);
});
