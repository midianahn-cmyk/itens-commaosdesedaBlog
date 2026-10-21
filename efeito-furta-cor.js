
/* =====================================================
   EFEITO FURTA-COR ARCO-ÍRIS
   Com Mãos de Seda © 2026
   Restrito a imagens dentro de .henry.post
===================================================== */

(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_HENRY_POST__) return;
  window.__CMS_FURTA_COR_HENRY_POST__ = true;

  var seletorPostagem = '.henry.post';
  var classeEfeito = 'cms-furta-cor-henry';

  // Estilos limitados exclusivamente à classe do efeito
  var estilo = document.createElement('style');

  estilo.textContent = `
    img.${classeEfeito} {
      transition: filter .3s ease;
    }

    img.${classeEfeito}.cms-furta-cor-ativo {
      filter: hue-rotate(100deg) saturate(2.3) brightness(1.08);
    }
  `;

  document.head.appendChild(estilo);

  function imagemDentroDaPostagem(img) {
    return !!(
      img &&
      img.tagName === 'IMG' &&
      img.closest(seletorPostagem) &&
      !img.closest(
        'button, input, select, textarea, [role="button"]'
      ) &&
      !img.hasAttribute('data-sem-furta-cor')
    );
  }

  document.addEventListener('mouseover', function (event) {
    var img = event.target;

    if (!imagemDentroDaPostagem(img)) return;

    img.classList.add(classeEfeito);
    img.classList.add('cms-furta-cor-ativo');
  }, true);

  document.addEventListener('mouseout', function (event) {
    var img = event.target;

    if (!img || img.tagName !== 'IMG') return;

    img.classList.remove('cms-furta-cor-ativo');
    img.classList.remove(classeEfeito);
  }, true);

})();
