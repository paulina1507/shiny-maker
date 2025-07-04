// === Modal presupuesto ===
document.addEventListener("DOMContentLoaded", () => {
  const openModal = document.getElementById("openQuoteForm");
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("quoteModal");

  openModal?.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  closeModal?.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  // === Menú móvil toggle ===
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // === Validación contacto ===
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      formResponse.textContent = "Correo no válido.";
      formResponse.style.color = "red";
      return;
    }
    formResponse.textContent = "Mensaje enviado con éxito!";
    formResponse.style.color = "green";
    contactForm.reset();
  });

  // === Validación formulario presupuesto ===
  const quoteForm = document.getElementById("quoteForm");
  const quoteMessage = document.getElementById("formMessage");

  quoteForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("quoteEmail").value;
    if (!email.includes("@") || !email.includes(".")) {
      quoteMessage.textContent = "Correo no válido.";
      quoteMessage.style.color = "red";
      return;
    }
    quoteMessage.textContent = "¡Solicitud enviada con éxito!";
    quoteMessage.style.color = "green";
    quoteForm.reset();
  });

  // === Animaciones al hacer scroll ===
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          entry.target.classList.remove("hidden");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".slide-in-left, .slide-in-right").forEach(el => {
    observer.observe(el);
  });

  // === Animación de frase inspiradora (máquina de escribir) ===
  const inspirational = document.querySelector(".typing-text");
  if (inspirational) {
    inspirational.classList.remove("typed"); // reinicia
    void inspirational.offsetWidth; // reinicia trigger CSS
    inspirational.classList.add("typed");
  }
});


