(function () {
  const cta = document.getElementById('ctaBtn');
  if (!cta) return;

  cta.addEventListener('click', function () {
    cta.animate(
      [
        { transform: 'translateY(0) scale(1)' },
        { transform: 'translateY(-2px) scale(1.02)' },
        { transform: 'translateY(0) scale(1)' }
      ],
      { duration: 280, easing: 'ease-out' }
    );
  });
})();
