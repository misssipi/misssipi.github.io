// Floating particles background
(function () {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = ['#56ab2f', '#a8e063', '#f7d154', '#f09030', '#fcb69f'];

  function createParticle() {
    const el = document.createElement('div');
    el.className = 'particle';
    const size = Math.random() * 6 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 10;
    const left = Math.random() * 100;

    el.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      left: ${left}%;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(el);

    setTimeout(() => el.remove(), (duration + delay) * 1000);
  }

  // Create initial particles
  for (let i = 0; i < 25; i++) createParticle();

  // Keep creating particles
  setInterval(() => {
    if (container.children.length < 30) createParticle();
  }, 1500);
})();
