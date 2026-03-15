/* NAVBAR */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const body      = document.querySelector('body');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const overlay   = document.getElementById('navOverlay');

  function closeMenu() {
    body.classList.remove('mobile-nav-active');
    const icon = toggleBtn?.querySelector('i');
    if (icon) { icon.classList.add('bi-list'); icon.classList.remove('bi-x'); }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('mobile-nav-active');
      const icon = toggleBtn.querySelector('i');
      if (icon) { icon.classList.toggle('bi-list'); icon.classList.toggle('bi-x'); }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (body.classList.contains('mobile-nav-active')) closeMenu();
    });
  });

  // Fermer au clic sur l'overlay
  overlay?.addEventListener('click', closeMenu);
});