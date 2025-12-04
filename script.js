/* script.js - VERSIUNE FINALĂ ȘI TESTATĂ */

// Variabilele trebuie să fie accesibile global (sau înainte de orice funcție)
let currentSlideIndex = 0;
let slideshowInterval = null;
const slides = document.querySelectorAll('#slideshow .slide'); 


// 1. Funcția de bază pentru schimbarea slide-ului (GLOBALĂ)
function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    slides[currentSlideIndex].classList.add('active');
}

// 2. Funcția de inițializare (GLOBALĂ - Apelată direct de ondblclick)
function startSlideshow() {
    // Verifică să nu ruleze deja
    if (slideshowInterval) {
        return;
    }

    // Aici nu mai avem nevoie de logica staticContainer, deoarece folosești metoda simplificată

    // Setează intervalul de 3 secunde
    slideshowInterval = setInterval(showNextSlide, 3000); 
    console.log("Slideshow pornit.");
}


// 3. Inițializarea la Încărcarea Paginii
document.addEventListener('DOMContentLoaded', () => {
    
    if (slides.length === 0) {
        console.error("Nu s-au găsit elemente pentru slideshow.");
        return;
    }
    
    // Ne asigurăm că prima imagine este vizibilă la încărcare
    slides[0].classList.add('active');
    
    // NOTĂ: Am eliminat logica veche de addEventListener pe slideshowTitle,
    // deoarece folosim acum ondblclick direct în HTML.
});