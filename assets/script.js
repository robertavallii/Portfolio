// Mouse tracking
document.addEventListener('mousemove', function(e) {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});

// Seleziona l'elemento con classe 'circle'
const circle = document.querySelector('.circle');

function updateCirclePosition() {
  // Ottieni la posizione del mouse tramite le variabili CSS
  const mouseX = getComputedStyle(document.documentElement).getPropertyValue('--mouse-x');
  const mouseY = getComputedStyle(document.documentElement).getPropertyValue('--mouse-y');
  
  // Posiziona il cerchio utilizzando i valori delle variabili CSS
  circle.style.left = mouseX;
  circle.style.top = mouseY;
}

// Aggiorna la posizione del cerchio alla posizione del mouse ogni 10ms
setInterval(updateCirclePosition, 10);

let languages = [
  'Ciao!',            // Italiano
  '¡Hola!',           // Spagnolo
  'Merhaba!',         // Turco
  'Hallo!',           // Tedesco
  'こんにちは!',        // Giapponese
  'Szia!',            // Ungherese
  'Привет!',          // Russo
  'Hei!',             // Norvegese
  'Olá!',             // Portoghese
  'Γειά σας!',        // Greco
  'Hello!',           // Inglese
  '你好!',             // Cinese
  'Hej!',             // Svedese
  'Olá!',             // Portoghese (Brasile)
  '你好!',             // Cinese (Mandarino)
];

let currentLangIndex = 0; // Partiamo dalla lingua "Hello!"

function changeLanguage() {
  const helloElement = document.getElementById('hello');
  
  // Cambia il testo a una lingua successiva
  helloElement.textContent = languages[currentLangIndex];
  
  // Aumenta l'indice per la lingua successiva, ciclando attraverso le lingue
  currentLangIndex = (currentLangIndex + 1) % languages.length; // Ciclo sulle lingue
}

// Cambiamo la lingua ogni 600ms
setInterval(changeLanguage, 400);



//modalità chiaro scuro
// Controlla se c'è una preferenza di tema salvata nel localStorage
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');  // Imposta il tema chiaro
  } else {
    document.body.classList.remove('light-mode');  // Tema scuro di default
  }
})
// Aggiungi un event listener per il clic sulla pagina
document.addEventListener('click', function(event) {
  // Verifica se l'elemento cliccato è un link, un tasto o un progetto (project-section)
  if (event.target.tagName !== 'A' && !event.target.closest('button') && !event.target.closest('.project-section')) {
    // Se il tema è light-mode, cambia a dark
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }
});



let lastScrollY = window.scrollY; // Posizione iniziale dello scroll
const wrapper = document.querySelector('.wrapper'); // Seleziona il wrapper della navbar

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scroll verso il basso
        wrapper.classList.add('hidden');
    } else {
        // Scroll verso l'alto
        wrapper.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Aggiorna la posizione corrente dello scroll
});