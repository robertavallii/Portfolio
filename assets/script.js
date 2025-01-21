// mouse
document.addEventListener('mousemove', function(e) {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
});


const circle = document.querySelector('.circle');

function updateCirclePosition() {
  // posizione del mouse
  const mouseX = getComputedStyle(document.documentElement).getPropertyValue('--mouse-x');
  const mouseY = getComputedStyle(document.documentElement).getPropertyValue('--mouse-y');
  
  // cerchio sopra mouse
  circle.style.left = mouseX;
  circle.style.top = mouseY;
}

// Aggiorna la posizione del cerchio alla posizione del mouse ogni 10ms
setInterval(updateCirclePosition, 10);



// lingua ciao
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

let currentLangIndex = 0; 

function changeLanguage() {
  const helloElement = document.getElementById('hello');
  
  helloElement.textContent = languages[currentLangIndex];
  
  currentLangIndex = (currentLangIndex + 1) % languages.length; // ciclo  lingue
}
// tempo 
setInterval(changeLanguage, 400);



//modalità chiaro scuro
document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');  // Imposta il tema chiaro
  } else {
    document.body.classList.remove('light-mode');  // Tema scuro di default
  }
})
// cambio al click
document.addEventListener('click', function(event) {
  if (event.target.tagName !== 'A' && !event.target.closest('button') && !event.target.closest('.project-section')) {
    // alternato
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }
});


// scroll progetto singolo
let lastScrollY = window.scrollY; 
const wrapper = document.querySelector('.wrapper'); 

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {

      wrapper.classList.add('hidden');
    } else {

      wrapper.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; 
});