
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const tryPlay = () => {
    if (audio) {
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
  };
  document.body.addEventListener('click', tryPlay, { once: true });
  document.body.addEventListener('touchstart', tryPlay, { once: true });
});
function glitchEffect(el) {
  el.style.transform = `translate(${(Math.random() - 0.5) * 5}px, ${(Math.random() - 0.5) * 5}px) rotate(${(Math.random() - 0.5) * 3}deg)`;
  setTimeout(() => {
    el.style.transform = 'translate(0, 0) rotate(0deg)';
  }, 150);
}
setInterval(() => {
  document.querySelectorAll('.glitch-button').forEach(btn => {
    if (Math.random() < 0.3) glitchEffect(btn);
  });
}, 500);
