
/* =====================================================
   EFEITO FURTA-COR ARCO-ÍRIS — COM MÃOS DE SEDA
   Restrito às imagens dentro de .post-body
   © 2026 Com Mãos de Seda
===================================================== */

(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_POSTBODY__) return;
  window.__CMS_FURTA_COR_POSTBODY__ = true;

  var seletorConteudo = '.post-body';
  var overlay = document.createElement('div');
  var estilo = document.createElement('style');

  overlay.setAttribute('aria-hidden', 'true');
  overlay.id = 'cms-furta-cor-overlay';

  overlay.style.cssText = [
    'position:fixed',
    'left:0',
    'top:0',
    'width:0',
    'height:0',
    'pointer-events:none',
    'z-index:1000',
    'opacity:0',
    'overflow:hidden',
    'background:linear-gradient(115deg,rgba(255,70,180,.42),rgba(170,90,255,.42),rgba(60,220,255,.42),rgba(255,235,100,.44),rgba(255,100,190,.42))',
    'background-size:250% 250%',
    'mix-blend-mode:color',
    'transition:opacity .22s ease'
  ].join(';');

  estilo.textContent =
    '@keyframes cmsFurtaCorMovimento{' +
    '0%{background-position:100% 50%}' +
    '100%{background-position:0% 50%}' +
    '}';

  function iniciar() {
    if (!document.body) return;

    document.head.appendChild(estilo);
    document.body.appendChild(overlay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, {
      once: true
    });
  } else {
    iniciar();
  }

  var imagemAtual = null;
  var quadroPendente = false;

  function imagemPermitida(img) {
    if (!img || img.tagName !== 'IMG') return false;

    // Restringir às imagens do conteúdo das postagens
    if (!img.closest(seletorConteudo)) return false;

    // Ignorar imagens explicitamente excluídas
    if (img.hasAttribute('data-sem-furta-cor')) return false;

    // Ignorar botões e controles
    if (img.closest(
      'button, input, select, textarea, ' +
      '[role="button"], [role="slider"], ' +
      '[contenteditable="true"]'
    )) return false;

    if (!img.complete || !img.naturalWidth) return false;

    var rect = img.getBoundingClientRect();

    if (rect.width < 40 || rect.height < 40) return false;

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
    var estiloImagem = getComputedStyle(imagemAtual);

    if (
      rect.bottom <= 0 ||
      rect.right <= 0 ||
      rect.top >= window.innerHeight ||
      rect.left >= window.innerWidth
    ) {
      esconder();
      return;
    }

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
