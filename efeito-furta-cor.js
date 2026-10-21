
/* =====================================================
   FURTA-COR ARCO-ÍRIS — SOMENTE NAS POSTAGENS
   Com Mãos de Seda © 2026
   Não cria elementos nem altera o layout do Blogger.
===================================================== */

(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_POSTAGEM_V3__) return;
  window.__CMS_FURTA_COR_POSTAGEM_V3__ = true;

  var estilo = document.createElement('style');

  estilo.textContent = `
    .cms-furta-cor-alvo {
      filter: hue-rotate(0deg) saturate(1);
      transition: filter .25s ease;
    }

    .cms-furta-cor-alvo.cms-furta-cor-ativo {
      filter: hue-rotate(100deg) saturate(2.2) brightness(1.08);
    }
  `;

  document.head.appendChild(estilo);

  /*
   * Só permite imagens dentro do conteúdo de uma postagem
   * em páginas individuais do Blogger.
   */
  function postagemIndividual(img) {
    if (!img || img.tagName !== 'IMG') return false;

    var caminho = window.location.pathname;

    // URLs de artigos do Blogger normalmente contêm /ano/mês/
    if (!/^\/\d{4}\/\d{2}\//.test(caminho)) return false;

    var corpo = img.closest('.post-body');

    if (!corpo) return false;

    // Confirmar que o corpo pertence a uma postagem
    if (!corpo.closest('.post, .hentry, article')) return false;

    // Excluir controles e elementos interativos
    if (img.closest(
      'a, button, input, select, textarea, ' +
      '[role="button"], [contenteditable="true"]'
    )) return false;

    if (img.hasAttribute('data-sem-furta-cor')) return false;

    return true;
  }

  function ativar(img) {
    if (!postagemIndividual(img)) return;

    img.classList.add('cms-furta-cor-alvo');
    img.classList.add('cms-furta-cor-ativo');
  }

  function desativar(img) {
    if (!img || !img.classList.contains('cms-furta-cor-alvo')) {
      return;
    }

    img.classList.remove('cms-furta-cor-ativo');
    img.classList.remove('cms-furta-cor-alvo');
  }

  document.addEventListener('mouseover', function (event) {
    var img = event.target;

    if (img && img.tagName === 'IMG') {
      ativar(img);
    }
  });

  document.addEventListener('mouseout', function (event) {
    var img = event.target;

    if (img && img.tagName === 'IMG') {
      desativar(img);
    }
  });

})();
