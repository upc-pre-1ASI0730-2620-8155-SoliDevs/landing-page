(() => {
  const els = document.querySelectorAll('.stat-num[data-count]');
  const grid = document.querySelector('.stats-grid');
  if (!els.length || !grid) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (el, v) => {
    const unit = el.dataset.unit ? '<small>' + el.dataset.unit + '</small>' : '';
    el.innerHTML = Math.round(v) + (el.dataset.suffix || '') + unit;
  };
  const run = (el, i) => {
    const to = Number(el.dataset.count);
    const from = Number(el.dataset.from || 0);
    if (reduce) return fmt(el, to);
    const duration = 1600;
    const start = performance.now() + i * 150;
    const tick = (now) => {
      const p = Math.min(Math.max((now - start) / duration, 0), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      fmt(el, from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  els.forEach((el) => fmt(el, Number(el.dataset.from || 0)));

  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      els.forEach(run);
      io.disconnect();
    }
  }, { threshold: 0.4 });
  io.observe(grid);
})();