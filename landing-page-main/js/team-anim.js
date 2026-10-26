(() => {
  const grid = document.querySelector('.team2-grid');
  const cards = document.querySelectorAll('.team2-card');
  if (!grid || !cards.length) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    cards.forEach((c) => c.classList.add('is-in'));
    return;
  }

  document.documentElement.classList.add('team-anim');
  cards.forEach((c, i) => c.style.setProperty('--i', i));

  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      cards.forEach((c) => c.classList.add('is-in'));
      io.disconnect();
    }
  }, { threshold: 0.25 });
  io.observe(grid);
})();