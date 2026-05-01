(function () {
  const cta = document.getElementById('ctaBtn');
  if (!cta) return;

  cta.addEventListener('click', function (e) {
    e.preventDefault();
    cta.animate(
      [
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-2px) scale(1.02)' },
        { transform: 'translateY(0) scale(1)' }
      ],
      { duration: 280, easing: 'ease-out' }
    );

    const original = cta.querySelector('span').textContent;
    cta.querySelector('span').textContent = 'REQUEST RECEIVED ✓';
    cta.style.pointerEvents = 'none';
    setTimeout(() => {
      cta.querySelector('span').textContent = original;
      cta.style.pointerEvents = '';
    }, 1800);
  });
})();
