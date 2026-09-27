const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
const toast = document.getElementById('toast');
const playHint = document.getElementById('playHint');
playHint.addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
  window.open('https://www.youtube.com/watch?v=aRJOcp3AbxU', '_blank', 'noopener');
});

// Subtle pointer-driven liquid light on desktop.
if (window.matchMedia('(pointer:fine)').matches) {
  const root = document.documentElement;
  window.addEventListener('pointermove', (e) => {
    root.style.setProperty('--mx', `${(e.clientX / innerWidth) * 100}%`);
    root.style.setProperty('--my', `${(e.clientY / innerHeight) * 100}%`);
  }, {passive:true});
}
