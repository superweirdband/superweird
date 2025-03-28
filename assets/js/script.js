// Animation des papillons
document.querySelectorAll('.butterfly').forEach((el, index) => {
  let angle = 0;
  const radius = 10 + index * 5;
  const speed = 0.02 + Math.random() * 0.01;

  function flutter() {
    angle += speed;
    const x = Math.sin(angle) * radius;
    const y = Math.cos(angle * 1.5) * radius;

    el.style.transform = `translate(${x}px, ${y}px) rotate(${Math.sin(angle) * 10}deg)`;
    requestAnimationFrame(flutter);
  }

  flutter();
});

// Glitch léger sur les boutons
function glitchEffect(el) {
  el.style.transform = `translate(${(Math.random() - 0.5) * 4}px, ${(Math.random() - 0.5) * 4}px) rotate(${(Math.random() - 0.5) * 5}deg)`;
  setTimeout(() => {
    el.style.transform = 'translate(0, 0) rotate(0deg)';
  }, 80);
}

setInterval(() => {
  document.querySelectorAll('.glitch-button').forEach(el => {
    if (Math.random() < 0.3) glitchEffect(el);
  });
}, 500);

// Contrôle de l'audio
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');

  // Certains navigateurs bloquent autoplay sans interaction
  const playAudio = () => {
    audio.volume = 0.3; // Volume doux
    audio.play().catch(e => {
      console.log("Audio bloqué par le navigateur : " + e.message);
    });
  };

  // Essaie de jouer à la première interaction
  document.body.addEventListener('click', playAudio, { once: true });
  document.body.addEventListener('touchstart', playAudio, { once: true });
});
