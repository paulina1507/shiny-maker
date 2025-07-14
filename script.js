document.addEventListener('mousemove', function(e) {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  const layers = document.querySelectorAll('.layer');

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.2;
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;
  const layers = document.querySelectorAll('.layer');

  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.1; // Velocidad incremental por capa
    layer.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});
