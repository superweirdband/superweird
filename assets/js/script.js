// Optional: interactivity or glitch effects could go here

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bg-audio');
  if (audio) {
    audio.volume = 0.3;
    audio.play().catch(() => {
      console.log('Autoplay blocked by browser');
    });
  }
});
// placeholder for JS content
