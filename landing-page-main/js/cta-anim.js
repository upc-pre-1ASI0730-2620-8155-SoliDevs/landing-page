(() => {
  const panel = document.querySelector('.cta-panel');
  if (!panel) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    panel.classList.add('is-in');
    return;
  }

  document.documentElement.classList.add('cta-anim');

  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      panel.classList.add('is-in');
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(panel);
})();