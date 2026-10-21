post-body


/* =====================================================
   FURTA-COR ARCO-ÍRIS — COM MÃOS DE SEDA
   Restrito às imagens das postagens
   Exclui completamente .share-bar
   © 2026
===================================================== */

(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_HENRY_V5__) return;
  window.__CMS_FURTA_COR_HENRY_V5__ = true;

  var seletorPostagem = '.post-body';
  var classeEfeito = 'cms-furta-cor-henry-v5';

  var estilo = document.createElement('style');

  estilo.textContent = `
    img.${classeEfeito} {
      transition: filter .3s ease;
    }

    img.${classeEfeito}.cms-furta-cor-ativo-v5 {
      filter: hue-rotate(100deg) saturate(2.3) brightness(1.08);
    }
  `;

  document.head.appendChild(estilo);

  function imagemPermitida(img) {
    if (!img || img.tagName !== 'IMG') return false;

    // Precisa estar dentro de uma postagem
    if (!img.closest(seletorPostagem)) return false;

    // Excluir a barra de compartilhamento inteira
    if (img.closest('.share-bar')) return false;

    // Excluir controles interativos
    if (img.closest(
      'button, input, select, textarea, ' +
      '[role="button"], [role="slider"]'
    )) return false;

    // Permitir exclusão manual
    if (img.hasAttribute('data-sem-furta-cor')) return false;

    return true;
  }

  document.addEventListener('mouseover', function (event) {
    var img = event.target;

    if (!imagemPermitida(img)) return;

    img.classList.add(classeEfeito);
    img.classList.add('cms-furta-cor-ativo-v5');
  }, true);

  document.addEventListener('mouseout', function (event) {
    var img = event.target;

    if (!img || img.tagName !== 'IMG') return;

    img.classList.remove('cms-furta-cor-ativo-v5');
    img.classList.remove(classeEfeito);
  }, true);

})();
