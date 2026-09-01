/* Pet Store Sorocaba — Quintal em Movimento.
   Progressive enhancement: fallbacks (sem-motion/sem-pin/sem-pin-galeria)
   só saem quando a versão animada correspondente é possível. */
(function () {
  'use strict';
  var body = document.body;
  var podeMotion = matchMedia('(prefers-reduced-motion: no-preference)').matches;
  var desktop = matchMedia('(min-width: 900px)').matches;
  var ponteiro = matchMedia('(pointer: fine)').matches;
  var temGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.18 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  var flutuante = document.querySelector('.wa-flutuante');
  var hero = document.querySelector('.hero');
  if (flutuante && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      flutuante.classList.toggle('visivel', !es[0].isIntersecting);
    }, { threshold: 0.1 }).observe(hero);
  } else if (flutuante) { flutuante.classList.add('visivel'); }

  if (!temGsap || !podeMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  body.classList.remove('sem-motion');

  /* HERO: 3 camadas de patinhas em profundidades diferentes + conteúdo */
  var stHero = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero .patas--1', { y: 60, ease: 'none', scrollTrigger: stHero });
  gsap.to('.hero .patas--2', { y: 140, ease: 'none', scrollTrigger: stHero });
  gsap.to('.hero .patas--3', { y: 260, ease: 'none', scrollTrigger: stHero });
  gsap.to('.hero-conteudo', { y: desktop ? -110 : -50, ease: 'none', scrollTrigger: stHero });
  gsap.from('.hero-tipo', { yPercent: 18, opacity: 0, duration: 0.9, ease: 'back.out(1.3)', delay: 0.1 });
  gsap.from('.hero-faixa', { scaleX: 0.4, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 });
  gsap.from('.hero-sub, .hero-acoes, .nota-google', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.09, delay: 0.5 });

  /* VAN: a travessia pinada com palavras sincronizadas */
  if (desktop) {
    var palavras = gsap.utils.toArray('.van-palavra');
    if (palavras.length) {
      body.classList.remove('sem-pin');
      var tl = gsap.timeline({
        scrollTrigger: { trigger: '.van-trilho', start: 'top top', end: 'bottom bottom', scrub: 0.4 }
      });
      tl.fromTo('.van-moldura', { x: '-60vw' }, { x: '105vw', ease: 'none', duration: 3 }, 0);
      palavras.forEach(function (p, i) {
        tl.to(p, { opacity: 1, duration: 0.35 }, i * 0.9 + 0.15)
          .to(p, { opacity: 0, duration: 0.35 }, i * 0.9 + 0.85);
      });
      tl.to('.van-rodape', { opacity: 1, y: 0, duration: 0.4 }, 2.6);
      gsap.set('.van-rodape', { opacity: 0, y: 20 });
    }
  }

  /* SERVIÇOS: foto circular que segue o cursor */
  if (desktop && ponteiro) {
    var lista = document.querySelector('.lista');
    var caixa = document.querySelector('.lista-foto');
    if (lista && caixa) {
      var fotos = caixa.querySelectorAll('img');
      var ax = 0, ay = 0, x = 0, y = 0, rodando = false;
      function anima() {
        x += (ax - x) * 0.16; y += (ay - y) * 0.16;
        caixa.style.transform = 'translate(' + (x + 26) + 'px,' + (y - 105) + 'px)';
        if (Math.abs(ax - x) > 0.5 || Math.abs(ay - y) > 0.5) requestAnimationFrame(anima);
        else rodando = false;
      }
      lista.addEventListener('pointermove', function (e) {
        ax = e.clientX; ay = e.clientY;
        if (!rodando) { rodando = true; requestAnimationFrame(anima); }
      });
      lista.querySelectorAll('a[data-foto]').forEach(function (a) {
        a.addEventListener('pointerenter', function () {
          caixa.classList.add('on');
          fotos.forEach(function (f) { f.classList.toggle('on', f.dataset.id === a.dataset.foto); });
        });
      });
      lista.addEventListener('pointerleave', function () { caixa.classList.remove('on'); });
    }
  }

  /* ENSAIO: expansão em OVAL (eco da logo) */
  var tlE = gsap.timeline({ scrollTrigger: { trigger: '.ensaio', start: 'top top', end: 'bottom bottom', scrub: 0.4 } });
  tlE.fromTo('.ensaio-media img',
    { clipPath: 'ellipse(16% 22% at 50% 50%)', scale: 1.15 },
    { clipPath: 'ellipse(85% 78% at 50% 50%)', scale: 1, ease: 'none', duration: 0.7 })
    .to('.ensaio-frase', { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.6);

  /* GALERIA horizontal */
  if (desktop) {
    var faixa = document.querySelector('.galeria-faixa');
    var wrap = document.querySelector('.galeria-trilho');
    if (faixa && wrap) {
      body.classList.remove('sem-pin-galeria');
      gsap.to(faixa, {
        x: function () { return -Math.max(0, faixa.scrollWidth - innerWidth + 90); },
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top top', end: 'bottom bottom', scrub: 0.35, invalidateOnRefresh: true }
      });
    }
  }

  /* CTA magnético */
  if (desktop && ponteiro) {
    var alvo = document.querySelector('.cta-final a');
    var caixaCta = document.querySelector('.cta-final');
    if (alvo && caixaCta) {
      caixaCta.addEventListener('pointermove', function (e) {
        var r = alvo.getBoundingClientRect();
        gsap.to(alvo, { x: (e.clientX - r.left - r.width / 2) * 0.14, y: (e.clientY - r.top - r.height / 2) * 0.14, duration: 0.4, ease: 'power2.out' });
      });
      caixaCta.addEventListener('pointerleave', function () {
        gsap.to(alvo, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,.5)' });
      });
    }
  }
})();
