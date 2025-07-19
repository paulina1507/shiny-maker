
  window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-img');
    if (parallax) {
      const scrolled = window.scrollY;
      parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });


  document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');

    // Cierra los demás
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});
