// Animación de texto
const phrases = ["Asesoría + Trámites + Soluciones", "Haciendo Tu Visa Más Fácil", "Facilitando Tu Viaje al Mundo"];
let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
const typingText = document.querySelector('.typing-text');
const typingDelay = 100;
const erasingDelay = 50;
const newPhraseDelay = 3000;

function typePhrase() {
    const current = phrases[currentPhrase];
    
    if (isDeleting) {
        typingText.textContent = current.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typingText.textContent = current.substring(0, currentChar + 1);
        currentChar++;
    }

    if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        setTimeout(typePhrase, newPhraseDelay);
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(typePhrase, typingDelay);
    } else {
        setTimeout(typePhrase, isDeleting ? erasingDelay : typingDelay);
    }
}

typePhrase();
