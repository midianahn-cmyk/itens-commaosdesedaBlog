
/* =====================================================
   EFEITO FURTA-COR ARCO-ÍRIS — ISOLADO
   Com Mãos de Seda © 2026

   Não altera classes, estilos, dimensões ou atributos
   das imagens originais. Não interfere no layout.
===================================================== */
(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_ISOLADO__) return;
  window.__CMS_FURTA_COR_ISOLADO__ = true;

  var overlay = document.createElement('div');

  overlay.setAttribute('aria-hidden', 'true');

  overlay.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:0',
    'height:0',
    'pointer-events:none',
    'z-index:2147483646',
    'opacity:0',
    'overflow:hidden',
    'background:linear-gradient(115deg,rgba(255,70,180,.42),rgba(170,90,255,.42),rgba(60,220,255,.42),rgba(255,235,100,.44),rgba(255,100,190,.42))',
    'background-size:250% 250%',
    'mix-blend-mode:color',
    'transition:opacity .22s ease'
  ].join(';');

  var animationStyle = document.createElement('style');

  animationStyle.textContent =
    '@keyframes cmsFurtaCorMovimento{' +
    '0%{background-position:100% 50%}' +
    '100%{background-position:0% 50%}' +
    '}';

  function montar() {
    if (!document.body) return;

    document.head.appendChild(animationStyle);
    document.body.appendChild(overlay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montar, {
      once: true
    });
  } else {
    montar();
  }

  var imagemAtual = null;
  var quadroPendente = false;

  function imagemPermitida(img) {
    if (!img || img.tagName !== 'IMG') return false;
    if (!img.complete || !img.naturalWidth) return false;

    if (img.hasAttribute('data-sem-furta-cor')) {
      return false;
    }

    if (img.closest(
      'button, input, select, textarea, ' +
      '[role="button"], [role="slider"], ' +
      '[contenteditable="true"]'
    )) {
      return false;
    }

    var rect = img.getBoundingClientRect();

    if (rect.width < 40 || rect.height < 40) {
      return false;
    }

    if (getComputedStyle(img).visibility === 'hidden') {
      return false;
    }

    return true;
  }

  function esconder() {
    imagemAtual = null;

    overlay.style.opacity = '0';
    overlay.style.animation = 'none';
    overlay.style.width = '0';
    overlay.style.height = '0';
  }

  function atualizar() {
    quadroPendente = false;

    if (
      !imagemAtual ||
      !imagemAtual.isConnected ||
      !imagemPermitida(imagemAtual)
    ) {
      esconder();
      return;
    }

    var rect = imagemAtual.getBoundingClientRect();

    if (
      rect.bottom <= 0 ||
      rect.right <= 0 ||
      rect.top >= window.innerHeight ||
      rect.left >= window.innerWidth
    ) {
      esconder();
      return;
    }

    // Reproduzir as bordas originais sem modificá-las.
    var estiloImagem = getComputedStyle(imagemAtual);

    overlay.style.left = rect.left + 'px';
    overlay.style.top = rect.top + 'px';
    overlay.style.width = rect.width + 'px';
    overlay.style.height = rect.height + 'px';
    overlay.style.borderRadius = estiloImagem.borderRadius;

    overlay.style.opacity = '1';

    overlay.style.animation =
      'cmsFurtaCorMovimento 2.5s linear infinite';
  }

  function agendarAtualizacao() {
    if (quadroPendente) return;

    quadroPendente = true;
    requestAnimationFrame(atualizar);
  }

  document.addEventListener('mouseover', function (event) {
    var img = event.target;

    if (img && img.tagName === 'IMG') {
      if (imagemPermitida(img)) {
        imagemAtual = img;
        atualizar();
      } else {
        esconder();
      }
    }
  }, true);

  document.addEventListener('mouseout', function (event) {
    if (event.target === imagemAtual) {
      esconder();
    }
  }, true);

  // Evitar manter o efeito durante navegação por teclado.
  document.addEventListener('focusin', esconder, true);

  window.addEventListener(
    'scroll', agendarAtualizacao, {
      passive: true,
      capture: true
    }
  );

  window.addEventListener(
    'resize', agendarAtualizacao, {
      passive: true
    }
  );

  // Limpar o efeito se a imagem for removida da página.
  var observador = new MutationObserver(function () {
    if (imagemAtual && !imagemAtual.isConnected) {
      esconder();
    }
  });

  observador.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

})();
