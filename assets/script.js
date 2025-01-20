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
setInterval(changeLanguage, 600);
