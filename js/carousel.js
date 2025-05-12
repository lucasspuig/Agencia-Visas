document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === getPrevIndex()) {
                slide.classList.add('prev');
            } else if (index === getNextIndex()) {
                slide.classList.add('next');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function getPrevIndex() {
        return (currentIndex - 1 + slides.length) % slides.length;
    }

    function getNextIndex() {
        return (currentIndex + 1) % slides.length;
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlides();
    }

    function goToPrev() {
        currentIndex = getPrevIndex();
        updateSlides();
    }

    function goToNext() {
        currentIndex = getNextIndex();
        updateSlides();
    }

    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);

    // Auto-advance every 5 seconds
    let autoplayInterval = setInterval(goToNext, 5000);

    // Pause autoplay on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(goToNext, 5000);
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', e => {
        touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                goToNext();
            } else {
                goToPrev();
            }
        }
    });

    // Initial setup
    updateSlides();
});
