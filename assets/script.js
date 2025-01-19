
//mouse
document.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
  });
  
  const circle = document.querySelector('.circle');
  
  function updateCirclePosition() {
  const mouseX = getComputedStyle(document.documentElement).getPropertyValue('--mouse-x');
  const mouseY = getComputedStyle(document.documentElement).getPropertyValue('--mouse-y');
  
  // Posiziona il cerchio usando le variabili CSS
  circle.style.left = mouseX;
  circle.style.top = mouseY;
  }
  
  // Aggiorna la posizione del cerchio alla posizione del mouse
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
    
    // Aumenta l'indice per la lingua successiva
    currentLangIndex = (currentLangIndex + 1) % languages.length; // Ciclo sulle lingue
}

// Cambiamo la lingua ogni 1 secondi (3000 millisecondi)
setInterval(changeLanguage, 600);



//click cambio colore
// Aggiungi il listener per il click
document.addEventListener('click', function() {
    // Aggiungi o rimuovi la classe "light-mode" sul body
    document.body.classList.toggle('light-mode');
  });
  