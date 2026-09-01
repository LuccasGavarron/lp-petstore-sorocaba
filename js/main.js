(function () {
  "use strict";

  // Monta os links de WhatsApp a partir de data-wa-text, com encodeURIComponent correto.
  document.querySelectorAll("[data-wa-text]").forEach(function (el) {
    var msg = el.getAttribute("data-wa-text");
    var base = el.getAttribute("href").split("?")[0];
    el.setAttribute("href", base + "?text=" + encodeURIComponent(msg));
  });

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var aberto = nav.classList.toggle("is-aberto");
      toggle.setAttribute("aria-expanded", String(aberto));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-aberto");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && nav.classList.contains("is-aberto")) {
        nav.classList.remove("is-aberto");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Reveals via IntersectionObserver, com respeito a prefers-reduced-motion.
  var reduzMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var elementos = document.querySelectorAll(".reveal");

  if (!reduzMovimento && "IntersectionObserver" in window && elementos.length) {
    document.body.classList.add("js-reveals");
    var observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    elementos.forEach(function (el) { observador.observe(el); });
  }
})();
