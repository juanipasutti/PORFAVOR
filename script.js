
// Detectar modo del sistema si no hay preferencia guardada
if (!localStorage.getItem("modo")) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}


window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#darkModeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // Dólares flotantes
  const dollarContainer = document.createElement("div");
  dollarContainer.style.position = "absolute";
  dollarContainer.style.top = 0;
  dollarContainer.style.left = 0;
  dollarContainer.style.width = "100%";
  dollarContainer.style.height = "300vh";
  dollarContainer.style.overflow = "hidden";
  dollarContainer.style.zIndex = "0";
  dollarContainer.style.pointerEvents = "none";

  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.textContent = "$";
    el.classList.add("dollar-style");
    el.style.position = "absolute";
    el.style.color = "#3DCF96";
    el.style.opacity = "0.25";
    el.style.fontSize = `${Math.random() * 2 + 1.8}rem`;
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 280}vh`;
    el.style.animation = "floatSymbol 30s linear infinite";
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    dollarContainer.appendChild(el);
  }

  document.body.appendChild(dollarContainer);
});

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});





// === HEADER DESAPARECE AL SCROLLEAR ===
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // Ocultar header al bajar
    header.classList.add("ocultar-header");
  } else {
    // Mostrar header al subir
    header.classList.remove("ocultar-header");
  }

  lastScroll = currentScroll;
});
